import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { Consumption } from "./useListAllConsumptionPaginated";
import { api } from "../lib/axios";

export interface UseConsumptionProps
  extends Omit<
    UseQueryOptions<AxiosResponse<Consumption>, AxiosError>,
    "queryKey" | "queryFn"
  > {
  id: string;
}

export const useConsumption = ({
  id,
  ...options
}: UseConsumptionProps): UseQueryResult<
  AxiosResponse<Consumption>,
  AxiosError
> => {
  return useQuery<AxiosResponse<Consumption>, AxiosError>({
    queryKey: ["user-data", id],
    queryFn: async ({ signal }: { signal: AbortSignal }) => {
      return await api.get(`/consumption/get/${id}`, { signal });
    },
    ...options, // inclui apenas as opções permitidas
  });
};
