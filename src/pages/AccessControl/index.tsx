import { Box } from "@mui/material";
import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DataTable from "../../components/DataTable";
import SearchBar from "../../components/SearchBar";
import { useListAllUsers } from "../../queries/useListAllUsersPaginated";

export default function AccessControl() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const listAllUserQuery = useListAllUsers({
    page: searchParams.get("page") ?? "0",
    size: searchParams.get("size") ?? "10",
  });

  function formatarTelefone(telefone: string) {
    const cleanedPhoneNumber = telefone.replace(/\D/g, "");
    return `(${cleanedPhoneNumber.slice(0, 2)}) ${cleanedPhoneNumber.slice(2, 7)}-${cleanedPhoneNumber.slice(7)}`;
  }

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nome",
      flex: 0.2,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.2,
      editable: false,
    },
    {
      field: "telephone",
      headerName: "Telefone",
      type: "string",
      flex: 0.2,
      editable: false,
      renderCell: (params) => {
        const formattedNumber = formatarTelefone(params.value);
        return formattedNumber;
      },
    },
    {
      field: "role",
      headerName: "Tipo de Conta",
      type: "string",
      flex: 0.2,
      editable: false,
    },
  ];
  const [searchQuery, SetSearchQuery] = useState<string>("");
  const [currentPage, SetCurrentPage] = useState(1);

  const handleSearch = (query: string) => {
    SetSearchQuery(query);
    SetCurrentPage(1);
  };

  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    const user = rows.find((row) => row.id === params.id);
    navigate(`/accessControl/profile/${params.id}`, { state: user });
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
        loading={listAllUserQuery.isPending}
        rows={listAllUserQuery?.data?.data ?? []}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row.username}
        checkboxSelection
        currentPage={currentPage}
        onSearch={SetCurrentPage}
        onCellClick={handleRowClick}
      />
    </Box>
  );
}
