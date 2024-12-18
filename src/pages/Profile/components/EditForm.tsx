import {
  Button,
  FormControl,
  Grid2,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TextInput from "../../../components/TextInput";
import { UserDataProps } from "..";

interface EditFormProps {
  userData: UserDataProps;
}
export default function EditForm() {
  return (
    <FormControl
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid2
        container
        rowSpacing={4}
        columnSpacing={12}
        width={"100%"}
        height={"100%"}
      >
        <Grid2 size={12}>
          <TextInput
            label={"Nome"}
            placeholder="nome"
            defaultValue={userData?.name}
          />
        </Grid2>
        <Grid2 size={6}>
          <TextInput
            label={"Email"}
            placeholder="Email"
            defaultValue={userData?.email}
          />
        </Grid2>
        <Grid2 size={6}>
          <TextInput
            label={"User"}
            placeholder="User"
            defaultValue={userData?.name}
          />
        </Grid2>
        <Grid2 size={6}>
          <TextInput
            label={"Numero"}
            placeholder="Numero"
            defaultValue={userData?.phone}
          />
        </Grid2>
        <Grid2 size={6}>
          <Typography variant="body1" mb={1}>
            Tipo de Conta
          </Typography>
          <Select
            variant="standard"
            disableUnderline
            defaultValue={userData.role}
            sx={{
              width: "100%",
              borderRadius: "50px",
              height: "3.5rem",
              border: "none",
              padding: "1rem",
              boxShadow: "0px 2px 6px 0px #13124212",
            }}
          >
            <MenuItem value={"administrador"}> Administrador</MenuItem>
            <MenuItem value={"moderador"}>Moderador</MenuItem>
            <MenuItem value={"usuario"}>Usuario</MenuItem>
          </Select>
        </Grid2>
      </Grid2>
    </FormControl>
  );
}
