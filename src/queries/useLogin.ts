import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { UserWithToken } from "../contexts/authContext";
import { api } from "../lib/axios";
import { AxiosResponse } from "axios";

interface LoginRequestBody {
  email: string;
  password: string;
}

export const useLogin = (): UseMutationResult<
  AxiosResponse<UserWithToken>,
  Error,
  LoginRequestBody
> => {
  const loginMutation = useMutation<
    AxiosResponse<UserWithToken>,
    Error,
    LoginRequestBody
  >({
    mutationFn: async (data: LoginRequestBody) => {
      return await api.post("/auth/", data);
    },
  });

  return loginMutation;
};
