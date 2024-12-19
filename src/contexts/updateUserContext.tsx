import { createContext, ReactNode } from "react";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { z, ZodError } from "zod";
import { useUpdateUser } from "../queries/useUpdateUser";
import { UserRole } from "./authContext";

export interface FormData {
  id: string;
  name: string;
  email: string;
  telephone: string;
  username: string;
  role: UserRole;
  profileImageUrl: string | null;
}

const formSchema = z.object({
  name: z.string().min(1, { message: "Campo obrigatório" }),
  email: z.string().email().min(1, { message: "Campo obrigatório" }),
  telephone: z.string().min(1, { message: "Campo obrigatório" }),
  username: z.string().min(1, { message: "Campo obrigatório" }),
  role: z.enum([UserRole.Administrator, UserRole.Manager, UserRole.Common]),
});

interface FormContextType {
  form: UseFormReturn<FormData>;
  onSubmit: SubmitHandler<FormData>;
}

export const UpdateUserFormContext = createContext<FormContextType | undefined>(
  undefined,
);

export const UpdateUserFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const form = useForm<FormData>({
    resolver: async (data) => {
      try {
        formSchema.parse(data);
        return { values: data, errors: {} };
      } catch (err) {
        const zodError = err as ZodError<FormData>;
        return {
          values: {},
          errors: zodError.errors.reduce<Record<string, { message: string }>>(
            (acc, current) => {
              acc[current.path[0]] = { message: current.message };
              return acc;
            },
            {},
          ),
        };
      }
    },
  });

  const updateUserQuery = useUpdateUser();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    updateUserQuery.mutateAsync(
      { id: data.id, data: data },
      {
        onSuccess: () => {
          console.log("sucesso");
        },
      },
    );
    // if (isSuccess) {
    //   return console.log("funcinou");
    // }
  };

  return (
    <UpdateUserFormContext.Provider value={{ form, onSubmit }}>
      {children}
    </UpdateUserFormContext.Provider>
  );
};
