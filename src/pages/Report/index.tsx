import { Box } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import DataTable from "../../components/DataTable";
import { useState } from "react";
import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

interface DemandReportRowTable {
  id: string;
  name: string;
  contractedDemand: number;
  currentConsume: number;
  usagePercentage: number;
}

const rows: DemandReportRowTable[] = [
  {
    id: "1",
    name: "Sead",
    contractedDemand: 250,
    currentConsume: 100,
    usagePercentage: 40,
  },
  {
    id: "2",
    name: "Sepror",
    contractedDemand: 250,
    currentConsume: 90,
    usagePercentage: 36,
  },
  {
    id: "3",
    name: "Sect",
    contractedDemand: 250,
    currentConsume: 110,
    usagePercentage: 44,
  },
  {
    id: "4",
    name: "Seinf",
    contractedDemand: 300,
    currentConsume: 150,
    usagePercentage: 50,
  },
  {
    id: "5",
    name: "Seap",
    contractedDemand: 200,
    currentConsume: 120,
    usagePercentage: 60,
  },
  {
    id: "6",
    name: "Seduc",
    contractedDemand: 350,
    currentConsume: 140,
    usagePercentage: 40,
  },
  {
    id: "7",
    name: "Secom",
    contractedDemand: 200,
    currentConsume: 85,
    usagePercentage: 42,
  },
  {
    id: "8",
    name: "Sest",
    contractedDemand: 300,
    currentConsume: 140,
    usagePercentage: 47,
  },
  {
    id: "9",
    name: "Sehab",
    contractedDemand: 180,
    currentConsume: 75,
    usagePercentage: 42,
  },
  {
    id: "10",
    name: "Seplan",
    contractedDemand: 220,
    currentConsume: 100,
    usagePercentage: 45,
  },
  {
    id: "11",
    name: "Sic",
    contractedDemand: 240,
    currentConsume: 95,
    usagePercentage: 40,
  },
  {
    id: "12",
    name: "Sefaz",
    contractedDemand: 280,
    currentConsume: 130,
    usagePercentage: 46,
  },
  {
    id: "13",
    name: "Semas",
    contractedDemand: 350,
    currentConsume: 145,
    usagePercentage: 41,
  },
  {
    id: "14",
    name: "Setrab",
    contractedDemand: 250,
    currentConsume: 105,
    usagePercentage: 42,
  },
  {
    id: "15",
    name: "Sejuf",
    contractedDemand: 270,
    currentConsume: 120,
    usagePercentage: 44,
  },
  {
    id: "16",
    name: "Seagri",
    contractedDemand: 230,
    currentConsume: 95,
    usagePercentage: 41,
  },
  {
    id: "17",
    name: "Semic",
    contractedDemand: 200,
    currentConsume: 80,
    usagePercentage: 40,
  },
  {
    id: "18",
    name: "Sever",
    contractedDemand: 250,
    currentConsume: 120,
    usagePercentage: 48,
  },
  {
    id: "19",
    name: "Seisp",
    contractedDemand: 220,
    currentConsume: 110,
    usagePercentage: 50,
  },
  {
    id: "20",
    name: "Segov",
    contractedDemand: 240,
    currentConsume: 100,
    usagePercentage: 42,
  },
  {
    id: "21",
    name: "Secopa",
    contractedDemand: 300,
    currentConsume: 140,
    usagePercentage: 47,
  },
  {
    id: "22",
    name: "Sena",
    contractedDemand: 180,
    currentConsume: 85,
    usagePercentage: 47,
  },
  {
    id: "23",
    name: "Sesai",
    contractedDemand: 350,
    currentConsume: 140,
    usagePercentage: 40,
  },
  {
    id: "24",
    name: "Secel",
    contractedDemand: 280,
    currentConsume: 120,
    usagePercentage: 43,
  },
  {
    id: "25",
    name: "Sudea",
    contractedDemand: 240,
    currentConsume: 95,
    usagePercentage: 39,
  },
  {
    id: "26",
    name: "Seduc",
    contractedDemand: 300,
    currentConsume: 120,
    usagePercentage: 40,
  },
  {
    id: "27",
    name: "Senai",
    contractedDemand: 220,
    currentConsume: 100,
    usagePercentage: 45,
  },
  {
    id: "28",
    name: "Sepror",
    contractedDemand: 200,
    currentConsume: 90,
    usagePercentage: 45,
  },
  {
    id: "29",
    name: "Secom",
    contractedDemand: 240,
    currentConsume: 115,
    usagePercentage: 48,
  },
  {
    id: "30",
    name: "Sefaz",
    contractedDemand: 270,
    currentConsume: 130,
    usagePercentage: 48,
  },
  {
    id: "31",
    name: "Sic",
    contractedDemand: 250,
    currentConsume: 115,
    usagePercentage: 46,
  },
];

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: "name",
    headerName: "Nome",
    flex: 0.2,
    editable: false,
  },
  {
    field: "contractedDemand",
    headerName: "Demanda Contratada",
    flex: 0.2,
    editable: false,
    valueGetter: (value) => `${value || ""} kW`,
  },
  {
    field: "currentConsume",
    headerName: "Consumo Atual",
    type: "string",
    flex: 0.2,
    editable: false,
    valueGetter: (value) => `${value || ""} kW`,
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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

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
        onRowClick={handleRowClick}
        checkboxSelection
        rows={rows}
        columns={columns}
        pageSize={10}
      />
    </Box>
  );
}
