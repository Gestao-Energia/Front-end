import { createContext, ReactNode } from "react";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { z, ZodError } from "zod";
import { UserRole } from "./authContext";

export interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  userName: string;
  role: UserRole;
}

const formSchema = z.object({
  name: z.string().min(1, { message: "Campo obrigatório" }),
  email: z.string().email().min(1, { message: "Campo obrigatório" }),
  contactNumber: z.number().min(1, { message: "Campo obrigatório" }),
  userName: z.string().min(1, { message: "Campo obrigatório" }),
  role: z.enum([UserRole.Administrator, UserRole.Manager, UserRole.Common]),
});

interface FormContextType {
  form: UseFormReturn<FormData>;
  onSubmit: SubmitHandler<FormData>;
}

export const RegisterUserFormContext = createContext<
  FormContextType | undefined
>(undefined);

export const RegisterUserFormProvider = ({
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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <RegisterUserFormContext.Provider value={{ form, onSubmit }}>
      {children}
    </RegisterUserFormContext.Provider>
  );
};
