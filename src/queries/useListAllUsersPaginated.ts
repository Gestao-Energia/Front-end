import {
  keepPreviousData,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { User } from "../contexts/authContext";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "../lib/axios";

interface Paginated {
  page: string;
  size?: string;
}
export interface Response {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  users: User[];
}

export const useListAllUsers = ({
  page,
  size = "10",
}: Paginated): UseQueryResult<AxiosResponse<Response>, AxiosError> => {
  const response = useQuery<AxiosResponse<Response>, AxiosError>({
    queryKey: ["user-list", page],
    queryFn: async ({ signal }: { signal: AbortSignal }) => {
      return await api.get(`/user/?page=${page}&size=${size}`, { signal });
    },
    placeholderData: keepPreviousData,
  });

  return response;
};
