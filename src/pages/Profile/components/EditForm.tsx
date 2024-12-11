import {
  Button,
  FormControl,
  Grid2,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TextInput from "../../../components/TextInput";

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
          <TextInput label={"Nome"} placeholder="nome" />
        </Grid2>
        <Grid2 size={6}>
          <TextInput label={"Email"} placeholder="Email" />
        </Grid2>
        <Grid2 size={6}>
          <TextInput label={"User"} placeholder="User" />
        </Grid2>
        <Grid2 size={6}>
          <TextInput label={"Numero"} placeholder="Numero" />
        </Grid2>
        <Grid2 size={6}>
          <Typography variant="body1" mb={1}>
            Tipo de Conta
          </Typography>
          <Select
            variant="standard"
            disableUnderline
            sx={{
              width: "100%",
              borderRadius: "50px",
              height: "3.5rem",
              border: "none",
              padding: "1rem",
              boxShadow: "0px 2px 6px 0px #13124212",
            }}
          >
            <MenuItem value={"admin"}> Administrador</MenuItem>
            <MenuItem value={"mod"}>Moderador</MenuItem>
            <MenuItem value={"user"}>Usuario</MenuItem>
          </Select>
        </Grid2>
      </Grid2>
    </FormControl>
  );
}
