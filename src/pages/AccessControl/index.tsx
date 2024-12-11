import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/DataTable";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";

interface Row {
  id: number;
  telefone: string;
  nome: string;
  email: string;
  tipoConta: string;
}
export default function AccessControl() {
  const rows: Row[] = [
    {
      id: 1,
      telefone: "11987654321",
      nome: "Jon Snow",
      email: "jon.snow@wall.com",
      tipoConta: "administrador",
    },
    {
      id: 2,
      telefone: "11923456789",
      nome: "Cersei Lannister",
      email: "cersei.lannister@lannister.com",
      tipoConta: "usuario",
    },
    {
      id: 3,
      telefone: "11976543210",
      nome: "Jaime Lannister",
      email: "jaime.lannister@lannister.com",
      tipoConta: "moderador",
    },
    {
      id: 4,
      telefone: "11987651234",
      nome: "Arya Stark",
      email: "arya.stark@stark.com",
      tipoConta: "usuario",
    },
    {
      id: 5,
      telefone: "11998765432",
      nome: "Daenerys Targaryen",
      email: "daenerys@targaryen.com",
      tipoConta: "administrador",
    },
    {
      id: 6,
      telefone: "11987654321",
      nome: "Melisandre",
      email: "melisandre@redgod.com",
      tipoConta: "moderador",
    },
    {
      id: 7,
      telefone: "11998765123",
      nome: "Ferrara Clifford",
      email: "clifford@france.com",
      tipoConta: "usuario",
    },
    {
      id: 8,
      telefone: "11999998888",
      nome: "Rossini Frances",
      email: "rossini@italy.com",
      tipoConta: "usuario",
    },
    {
      id: 9,
      telefone: "11912345678",
      nome: "Harvey Roxie",
      email: "roxie@legal.com",
      tipoConta: "moderador",
    },
  ];

  function formatarTelefone(telefone: string) {
    const cleanedPhoneNumber = telefone.replace(/\D/g, "");
    return `(${cleanedPhoneNumber.slice(0, 2)}) ${cleanedPhoneNumber.slice(2, 7)}-${cleanedPhoneNumber.slice(7)}`;
  }

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "nome",
      headerName: "Nome",
      flex: 0.2,
      editable: false,
    },
    {
      field: "email",
      headerName: "Last name",
      flex: 0.2,
      editable: false,
    },
    {
      field: "telefone",
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
      field: "tipoConta",
      headerName: "Tipo de Conta",
      type: "string",
      flex: 0.2,
      editable: false,
    },
  ];
  const [searchQuery, SetSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    SetSearchQuery(query);
  };

  const filteredRows = rows.filter(
    (row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    // row.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // row.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // row.telefone.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // row.tipoConta.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <DataTable rows={filteredRows} columns={columns} pageSize={5} />
    </Box>
  );
}
