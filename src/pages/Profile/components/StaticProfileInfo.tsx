import { Grid2, Typography } from "@mui/material";
import { UserDataProps } from "..";

interface StaticProfileInfoProps {
  userData: UserDataProps;
}

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
        <Typography>{userData?.name}</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>Email</Typography>
        <Typography>{userData?.email}</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>User</Typography>
        <Typography>{userData?.name}</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>Numero</Typography>
        <Typography>{userData?.phone}</Typography>
      </Grid2>
      <Grid2 size={6}>
        <Typography>Tipo de Conta</Typography>
        <Typography>{userData?.role}</Typography>
      </Grid2>
    </Grid2>
  );
}
