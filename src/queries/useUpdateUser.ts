import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { User } from "../contexts/authContext";
import { AxiosResponse } from "axios";
import { api } from "../lib/axios";

interface Id {
  id: string | null;
}

export const useUpdateUser = ({
  id,
}: Id): UseMutationResult<AxiosResponse<User>, Error, { data: User }> => {
  const mutate = useMutation<AxiosResponse<User>, Error, { data: User }>({
    mutationFn: async ({ data }) => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string | Blob);
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
