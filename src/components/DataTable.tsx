import { Box, Pagination } from "@mui/material";
import { DataGrid, DataGridProps, GridColDef } from "@mui/x-data-grid";
import { useSearchParams } from "react-router-dom";

interface CustomDataGridProps<T> {
  rows: T[];
  columns: GridColDef[];
  pageSize: number;
  currentPage: number;
  totalPages: number;
}

interface DataTableProps<T>
  extends CustomDataGridProps<T>,
    Omit<DataGridProps, "rows" | "columns"> {}

export default function DataTable<T>({
  rows,
  columns,
  pageSize,
  totalPages,
  currentPage,
  ...dataGridProps
}: DataTableProps<T>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setSearchParams((params) => {
      params.set("page", String(page - 1));

      return params;
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter
        disableColumnResize
        sx={{
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#E5EDF8",
          },
        }}
        {...dataGridProps}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Pagination
          page={currentPage + 1}
          count={totalPages}
          onChange={handlePageChange}
          hidePrevButton
          hideNextButton
          variant="outlined"
          sx={{
            "& .MuiPaginationItem-root": {
              backgroundColor: "rgba(204, 204, 204, 0.5)",
              margin: 1,
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "rgba(47, 128, 237, 0.2)",
              },
              "&.Mui-selected": {
                backgroundColor: "rgba(47, 128, 237, 0.2)",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}
