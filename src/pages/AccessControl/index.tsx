import { Box, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Row {
    id: number;
    telefone: string;
    nome: string;
    email: string;
  }
export default function AccessControl() {
    
        const rows: Row[] = [
          { id: 1, telefone: '11987654321', nome: 'Jon Snow', email: 'jon.snow@wall.com' },
          { id: 2, telefone: '11923456789', nome: 'Cersei Lannister', email: 'cersei.lannister@lannister.com' },
          { id: 3, telefone: '11976543210', nome: 'Jaime Lannister', email: 'jaime.lannister@lannister.com' },
          { id: 4, telefone: '11987651234', nome: 'Arya Stark', email: 'arya.stark@stark.com' },
          { id: 5, telefone: '11998765432', nome: 'Daenerys Targaryen', email: 'daenerys@targaryen.com' },
          { id: 6, telefone: '11987654321', nome: 'Melisandre', email: 'melisandre@redgod.com' },
          { id: 7, telefone: '11998765123', nome: 'Ferrara Clifford', email: 'clifford@france.com' },
          { id: 8, telefone: '11999998888', nome: 'Rossini Frances', email: 'rossini@italy.com' },
          { id: 9, telefone: '11912345678', nome: 'Harvey Roxie', email: 'roxie@legal.com' },
        ];
            function formatarTelefone(telefone: string) {
            const cleanedPhoneNumber = telefone.replace(/\D/g, ''); 
            return `(${cleanedPhoneNumber.slice(0, 2)}) ${cleanedPhoneNumber.slice(2, 7)}-${cleanedPhoneNumber.slice(7)}`;
          }

    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'nome',
          headerName: 'Nome',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
            field: 'telefone',
            headerName: 'Telefone',
            type: 'string',
            width: 150,
            editable: true,
            renderCell: (params) => {
                const formattedNumber = formatarTelefone(params.value);
                return formattedNumber;
              },
        },
      ];
      console.log('Rows:', rows); // Verifique no console os dados completos das linhas

      
    return (
        <Box>
            <Paper>
                SearchBar
            </Paper>
            <DataGrid 
                columns={columns}
                rows= {rows}
            >

            </DataGrid>
        </Box>
    )
}