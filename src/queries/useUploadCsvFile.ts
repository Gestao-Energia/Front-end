import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "../lib/axios";

export const useUploadCsvFile = (): UseMutationResult<
  AxiosResponse<string>,
  AxiosError<{ message: string }>,
  File
> => {
  const fileUploadMutation = useMutation<
    AxiosResponse<string>,
    AxiosError<{ message: string }>,
    File
  >({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      return await api.post("/consumption/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  });

  return fileUploadMutation;
};
