import { Grid2, Typography } from "@mui/material";
import { useGetUser } from "../../../queries/useGetUser";
import { useParams, useSearchParams } from "react-router-dom";

export default function StaticProfileInfo() {
  return (
    <Grid2
      container
      rowSpacing={4}
      columnSpacing={12}
      width={"100%"}
      height={"100%"}
    >
      <Grid2 size={12}>
        <Typography>Nome </Typography>
        <Typography></Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>Email</Typography>
        <Typography>as</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>User</Typography>
        <Typography>as</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>Numero</Typography>
        <Typography>as</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>Tipo de Conta</Typography>
        <Typography>as</Typography>
      </Grid2>
    </Grid2>
  );
}
