import { useState } from "react";
import { AxiosError } from "axios";
import { api } from "../lib/axios";
import { User } from "../contexts/authContext";

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export const AuthService = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = (data: LoginRequestBody): Promise<AuthResponse | null> => {
    setLoading(true);
    setError(null);

    return api
      .post<AuthResponse>("/auth/", data)
      .then((response) => response.data)
      .catch((error) => {
        if (error instanceof AxiosError && error.response) {
          setError(error.response.data.message || "Erro ao realizar o login");
        } else {
          setError("Erro inesperado ao realizar o login");
        }
        return null;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loginUser, loading, error };
};
