import { Box, Grid2, MenuItem, Select, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import TextInput from "../../../components/TextInput";
import { User } from "../../../contexts/authContext";
import { useUpdateUserFormContext } from "../../../hooks/useUpdateUserFormContext";

export default function EditForm({ userData }: { userData: User | null }) {
  const { form } = useUpdateUserFormContext();

  return (
    <Box
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
          <Controller
            name="name"
            control={form.control}
            defaultValue={userData?.name}
            render={({ field }) => (
              <>
                <TextInput
                  label={"Nome"}
                  placeholder="nome"
                  value={field.value ?? userData?.name}
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
        </Grid2>
        <Grid2 size={6}>
          <Controller
            name="email"
            defaultValue={userData?.email}
            control={form.control}
            render={({ field }) => (
              <>
                <TextInput
                  label={"Email"}
                  placeholder="Email"
                  value={field.value ?? userData?.email}
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
        </Grid2>
        <Grid2 size={6}>
          <Controller
            name="username"
            control={form.control}
            defaultValue={userData?.username}
            render={({ field }) => (
              <>
                <TextInput
                  label={"User"}
                  placeholder="User"
                  value={field.value ?? userData?.username}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                {form.formState.errors.username && (
                  <Typography
                    variant="body1"
                    textAlign={"start"}
                    sx={{ m: 1 }}
                    color="red"
                  >
                    {form.formState.errors?.username?.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Grid2>
        <Grid2 size={6}>
          <Controller
            name="telephone"
            control={form.control}
            defaultValue={userData?.telephone}
            render={({ field }) => (
              <>
                <TextInput
                  placeholder="(123) 456 - 7890"
                  label="Número"
                  type={"number"}
                  fullWidth
                  value={field.value ?? userData?.telephone}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                {form.formState.errors.telephone && (
                  <Typography
                    variant="body1"
                    textAlign={"start"}
                    sx={{ m: 1 }}
                    color="red"
                  >
                    {form.formState.errors?.telephone?.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Grid2>
        <Grid2 size={6}>
          <Typography variant="body1" mb={1}>
            Tipo de Conta
          </Typography>
          <Controller
            name="role"
            control={form.control}
            defaultValue={userData?.role}
            render={({ field }) => (
              <Select
                {...field}
                variant="standard"
                value={field.value ?? userData?.role}
                onChange={(e) => field.onChange(e.target.value)}
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
                <MenuItem value="ADMIN">Administrador</MenuItem>
                <MenuItem value="MANAGER">Gestor</MenuItem>
                <MenuItem value="COMMON">Operador</MenuItem>
              </Select>
            )}
          />
          {form.formState.errors.role && (
            <Typography
              variant="body1"
              textAlign={"start"}
              sx={{ m: 1 }}
              color="red"
            >
              {form.formState.errors.role.message}
            </Typography>
          )}
        </Grid2>
      </Grid2>
    </Box>
  );
}
