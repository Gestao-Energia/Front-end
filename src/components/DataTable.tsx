import { Box, Pagination } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

interface CustomDataGridProps<T> {
    rows: T[];
    columns: GridColDef[];
    pageSize: number;
  }
export default function DataTable<T>({rows, columns, pageSize}: CustomDataGridProps<T>){

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage -1) *pageSize;
    const currentRows = rows.slice(startIndex, startIndex+ pageSize);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) =>{
        setCurrentPage(page);
    }

    return (    
        <Box sx={{
            display:"flex",
            flexDirection:"column",
        }}>
            <DataGrid
            rows={currentRows}
            columns={columns}
            hideFooter
            />

            <Box sx={{
                display:'flex',
                justifyContent:'flex-end',
                width: '100%'
            }}>

            <Pagination
             count={Math.ceil(rows.length / pageSize)} 
             page={currentPage} 
             onChange={handlePageChange} 
             hidePrevButton 
             hideNextButton
             variant="outlined"
            sx={{
                "& .MuiPaginationItem-root": {
                backgroundColor: "rgba(47, 128, 237, 0.2)", // Cor com 20% de opacidade
                "&:hover": {
                    backgroundColor: "rgba(47, 128, 237, 0.4)", // Cor mais opaca ao passar o mouse
                },
                "&.Mui-selected": {
                    backgroundColor: "rgba(47, 128, 237, 0.4)", // Cor da bolinha selecionada
                }
                },
            }}
            />
            </Box>

        </Box>
    )
}