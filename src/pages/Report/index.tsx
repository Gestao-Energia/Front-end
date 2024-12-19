import { Box } from "@mui/material";
import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import { useNavigate, useSearchParams } from "react-router-dom";
import DataTable from "../../components/DataTable";
import SearchBar from "../../components/SearchBar";
import { useListAllConsumptionPaginated } from "../../queries/useListAllConsumptionPaginated";

const columns: GridColDef[] = [
  {
    field: "departmentName",
    headerName: "Nome",
    flex: 0.5,
    editable: false,
    renderCell: (params) => params.row.department.name,
  },
  {
    field: "contractedDemand",
    headerName: "Demanda Contratada",
    flex: 0.2,
    editable: false,
    renderCell: (params) =>
      `${params.row.department.contractedKilowatts || "0"} kW`,
  },
  {
    field: "currentConsume",
    headerName: "Consumo Atual",
    type: "string",
    flex: 0.2,
    editable: false,
    renderCell: (params) =>
      `${params.row.department.contractedKilowatts || "0"} kW`,
  },
  {
    field: "usagePercentage",
    headerName: "Porcentagem",
    flex: 0.2,
    editable: false,
    valueGetter: (value) => `${value || ""}% de uso`,
  },
];

export default function Report() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const consumptionQuery = useListAllConsumptionPaginated({
    page: searchParams.get("page") ?? "0",
    size: searchParams.get("size") ?? "10",
  });

  const handleSearch = (query: string) => {};

  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    navigate(`/report/${params.id}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "30px",
        padding: 1.5,
        gap: 2,
        backgroundColor: "#F8F8F8",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#E5EDF8",
          padding: 1.5,
          borderRadius: "50px",
        }}
      >
        <SearchBar onSearch={handleSearch} />
      </Box>
      <DataTable
        loading={consumptionQuery.isPending}
        rows={consumptionQuery?.data?.data ?? []}
        columns={columns}
        currentPage={parseInt(searchParams.get("page") ?? "0")}
        totalPages={consumptionQuery?.data?.data["totalPages"] ?? 0}
        pageSize={parseInt(searchParams.get("size") ?? "10")}
        getRowId={(row) => row.id}
        checkboxSelection
        onCellClick={handleRowClick}
      />
    </Box>
  );
}
