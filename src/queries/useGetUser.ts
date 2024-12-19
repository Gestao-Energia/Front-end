import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { User } from "../contexts/authContext";
import { api } from "../lib/axios";

export interface Id {
  id: string | undefined;
}
export const useGetUser = ({
  id,
}: Id): UseQueryResult<AxiosResponse<User>, AxiosError> => {
  const response = useQuery<AxiosResponse<User>, AxiosError>({
    queryKey: ["user-data", id],
    queryFn: async ({ signal }: { signal: AbortSignal }) => {
      return await api.get(`/user/${id}`, { signal });
    },
  });

  return response;
};
