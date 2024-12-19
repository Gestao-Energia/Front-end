import {
  keepPreviousData,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "../lib/axios";

export interface QueryParamsPaginated {
  page: string;
  size?: string;
}
export interface Department {
  id: string;
  name: string;
  contractedKilowatts: number;
  consumptions: any[];
  createdAt: string;
  updatedAt: string;
}

export interface Consumption {
  id: string;
  year: number;
  month: number;
  amount: number;
  kilowatts: number;
  category: string;
  department: Department;
  createdAt: string;
  updatedAt: string;
}

export interface ListConsumptionPaginatedResponse {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  users: Consumption[];
}

export const useListAllConsumptionPaginated = ({
  page,
  size = "10",
}: QueryParamsPaginated): UseQueryResult<
  AxiosResponse<Consumption[]>,
  AxiosError
> => {
  const response = useQuery<AxiosResponse<Consumption[]>, AxiosError>({
    queryKey: ["consumption-list", page],
    queryFn: async ({ signal }: { signal: AbortSignal }) => {
      return await api.get(`/consumption/get?page=${page}&size=${size}`, {
        signal,
      });
    },
    placeholderData: keepPreviousData,
  });

  return response;
};
