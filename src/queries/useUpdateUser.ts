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
  Error
> => {
  const mutate = useMutation<AxiosResponse<User>, Error, { data: User }>({
    mutationFn: async ({ id, data }: UpdateUserProps) => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string | Blob);
      });

      console.log(id);
      return await api.put(`/user/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  });
  return mutate;
};
