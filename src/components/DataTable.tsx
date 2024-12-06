import { Box, Pagination } from "@mui/material";
import { DataGrid, GridColDef, DataGridProps } from "@mui/x-data-grid";
import { useState } from "react";

interface CustomDataGridProps<T> {
  rows: T[];
  columns: GridColDef[];
  pageSize: number;
  currentPage: number;
  onSearch: (page: number) => void
}

interface DataTableProps<T>
  extends CustomDataGridProps<T>,
    Omit<DataGridProps, "rows" | "columns"> {}

export default function DataTable<T>({
  rows,
  columns,
  pageSize,
  currentPage,
  onSearch,
  ...dataGridProps
}: DataTableProps<T>) {

  const startIndex = (currentPage - 1) * pageSize;
  const currentRows = rows.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    onSearch(page);
  };


  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <DataGrid
        rows={currentRows}
        columns={columns}
        disableColumnResize
        hideFooter
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
          count={Math.ceil(rows.length / pageSize)}
          page={currentPage}
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
