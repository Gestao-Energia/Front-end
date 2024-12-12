import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { User } from "../contexts/authContext";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "../lib/axios";

interface Paginated {
  page: string;
  size: string;
}

export const useListAllUsers = ({
  page,
  size,
}: Paginated): UseQueryResult<AxiosResponse<User[]>, AxiosError> => {
  const response = useQuery<AxiosResponse<User[]>, AxiosError>({
    queryKey: ["user-list"],
    queryFn: async ({ signal }: { signal: AbortSignal }) => {
      return await api.get(`/user/?page=${page}&size=${size}`, { signal });
    },
  });

  return response;
};
