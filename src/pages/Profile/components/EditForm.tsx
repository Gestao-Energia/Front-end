import { Grid2 } from "@mui/material";
import TextInput from "../../../components/TextInput";

export default function EditForm(){
  return (
    <Grid2
    container
    spacing={2}
    rowSpacing={4}
    >
        <Grid2 size={{ xs:12}} >
          <TextInput
          label={'Nome'}
          placeholder="nome"
          sx={{
            
          }}
          />
        </Grid2>
        <Grid2 size={{xs:12, sm:6}}>
        <TextInput
          label={'Email'}
          placeholder="Email"
          />
        </Grid2>
        <Grid2 size={{xs:12, sm:6}}>
        <TextInput
          label={'Numero'}
          placeholder="Numero"
          />
        </Grid2>
        <Grid2 size={{xs:12, sm:6}}>
        <TextInput
          label={'User'}
          placeholder="User"
          />
        </Grid2>
        <Grid2 size={{xs:12, sm:6}}>
        <TextInput
          label={'Tipo de Conta'}
          placeholder="Tipo de Conta"
          />
        </Grid2>
    </Grid2>
  )
}