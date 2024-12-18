import { Grid2, Typography } from "@mui/material";
import { User } from "../../../contexts/authContext";

export default function StaticProfileInfo({ userData }: { userData: User }) {
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
        <Typography>{userData.name}</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>Email</Typography>
        <Typography>{userData.email}</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>User</Typography>
        <Typography>{userData.username}</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>Numero</Typography>
        <Typography>{userData.telephone}</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>Tipo de Conta</Typography>
        <Typography>{userData.role}</Typography>
      </Grid2>
    </Grid2>
  );
}
