import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { User } from "../contexts/authContext";
import { api } from "../lib/axios";

export const useRegisterNewUser = (): UseMutationResult<
  AxiosResponse<User>,
  Error,
  User
> => {
  const newUserMutation = useMutation<AxiosResponse<User>, Error, User>({
    mutationFn: async (data: User) => {
      return await api.post("user/", {
        ...data,
        profileImageUrl: data.profileImageUrl ?? null,
        password: data.password ?? "",
      });
    },
  });

  return newUserMutation;
};
