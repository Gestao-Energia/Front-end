import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextInput from "../../../components/TextInput";
import { useRegisterUserFormContext } from "../../../hooks/useRegisterUserFormContext";
import { Controller } from "react-hook-form";

export default function RegisterUserForm() {
  const { form } = useRegisterUserFormContext();

  return (
    <>
      <Box sx={{ textAlign: "left" }} mb={"65px"}>
        <Typography variant="h5" fontSize={"24px"} fontWeight={"700"} mb={1}>
          Formulário
        </Typography>
        <Typography variant="body2" color="#6F6C90">
          Por favor, preencha o formulário abaixo para criar a conta
        </Typography>
      </Box>
      <Stack>
        <Grid
          container
          spacing={3}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 3,
          }}
        >
          <Grid>
            <Controller
              name="name"
              control={form.control}
              render={({ field }) => (
                <>
                  <TextInput
                    placeholder="John Carter"
                    label="Nome"
                    fullWidth
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {form.formState.errors.name && (
                    <Typography
                      variant="body1"
                      textAlign={"start"}
                      sx={{ m: 1 }}
                      color="red"
                    >
                      {form.formState.errors?.name?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>
          <Grid>
            <Controller
              name="email"
              control={form.control}
              render={({ field }) => (
                <>
                  <TextInput
                    placeholder="Email"
                    label="Email"
                    fullWidth
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {form.formState.errors.email && (
                    <Typography
                      variant="body1"
                      textAlign={"start"}
                      sx={{ m: 1 }}
                      color="red"
                    >
                      {form.formState.errors?.email?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>

          <Grid>
            <Controller
              name="contactNumber"
              control={form.control}
              render={({ field }) => (
                <>
                  <TextInput
                    placeholder="(123) 456 - 7890"
                    label="Número"
                    type={"number"}
                    fullWidth
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {form.formState.errors.contactNumber && (
                    <Typography
                      variant="body1"
                      textAlign={"start"}
                      sx={{ m: 1 }}
                      color="red"
                    >
                      {form.formState.errors?.contactNumber?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>

          <Grid>
            <Controller
              name="userName"
              control={form.control}
              render={({ field }) => (
                <>
                  <TextInput
                    placeholder="johncarter"
                    label="Usuário"
                    fullWidth
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {form.formState.errors.userName && (
                    <Typography
                      variant="body1"
                      textAlign={"start"}
                      sx={{ m: 1 }}
                      color="red"
                    >
                      {form.formState.errors?.userName?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
