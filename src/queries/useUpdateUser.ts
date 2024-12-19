import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { User } from "../contexts/authContext";
import { api } from "../lib/axios";

interface UpdateUserProps {
  id: string | null;
  data: User;
}

export const useUpdateUser = (): UseMutationResult<
  AxiosResponse<User>,
  Error,
  UpdateUserProps
> => {
  const mutate = useMutation<AxiosResponse<User>, Error, UpdateUserProps>({
    mutationFn: async ({ id, data }: UpdateUserProps) => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value as string | Blob);
        }
      });
      return await api.put(`/user/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  });
  return mutate;
};
