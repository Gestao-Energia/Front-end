import { createContext, ReactNode } from "react";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { z, ZodError } from "zod";
import { User, UserRole } from "./authContext";
import { useRegisterNewUser } from "../queries/useRegisterNewUser";
import { useAlert } from "../hooks/useAlert";
import { useNavigate } from "react-router-dom";

export interface FormData {
  name: string;
  email: string;
  telephone: string;
  username: string;
  role: UserRole;
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
  isLoading: boolean;
}

export const RegisterUserFormContext = createContext<
  FormContextType | undefined
>(undefined);

export const RegisterUserFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const registerNewUserQuery = useRegisterNewUser();
  const { showAlert } = useAlert();
  const navigate = useNavigate();

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

  const onSubmit: SubmitHandler<FormData> = (data: User) => {
    registerNewUserQuery.mutateAsync(data, {
      onSuccess: () => {
        showAlert({
          title: "Sucesso",
          message: "Usuário cadastrado com sucesso",
          severity: "success",
        }),
          navigate("/accessControl");
      },
      onError: (err) => {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Erro ao tentar registrar um usuário";
        showAlert({
          title: "Erro",
          message: errorMessage,
          severity: "error",
        });
      },
    });
  };

  return (
    <RegisterUserFormContext.Provider
      value={{ form, onSubmit, isLoading: registerNewUserQuery.isPending }}
    >
      {children}
    </RegisterUserFormContext.Provider>
  );
};
