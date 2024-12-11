import { Grid2, Typography } from "@mui/material";

interface User {
  id: number;
  telefone: string;
  nome: string;
  email: string;
  tipoConta: string;
}
export default function StaticProfileInfo({ userData }) {
  return (
    <Grid2
      container
      rowSpacing={4}
      columnSpacing={12}
      width={"100%"}
      height={"100%"}
    >
      <Grid2 size={12}>
        <Typography>Nome : {userData.nome}</Typography>
        <Typography>Samantha da Silva Vasconcelos</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>Email</Typography>
        <Typography>samantha@gmail.com</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>User</Typography>
        <Typography>samantha01</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>Numero</Typography>
        <Typography>(123) 456 - 7890</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>Tipo de Conta</Typography>
        <Typography>Administrador</Typography>
      </Grid2>
    </Grid2>
  );
}
