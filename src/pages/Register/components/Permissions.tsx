import { Box, Stack, ToggleButton, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { useRegisterUserFormContext } from "../../../hooks/useRegisterUserFormContext";

export default function RegisterUserPermissions() {
  const { form } = useRegisterUserFormContext();

  return (
    <>
      <Box sx={{ textAlign: "left" }} mb={"65px"}>
        <Typography variant="h5" fontSize={"24px"} fontWeight={"700"} mb={1}>
          Formulário
        </Typography>
        <Typography variant="body2" color="#6F6C90">
          Por favor, selecione o tipo de conta do usuário..
        </Typography>
      </Box>
      <Box>
        <Controller
          name="role"
          control={form.control}
          render={({ field }) => (
            <>
              <Stack direction={"row"} justifyContent={"center"} gap={5} mb={5}>
                <ToggleButton
                  value="Administrador"
                  selected={field.value === "Administrador"}
                  sx={{
                    background: "#FFF",
                    boxShadow: "0px 4px 10px 0px #1F255912",
                    textTransform: "none",
                    color: "#170F49",
                    fontSize: "18px",
                    fontWeight: 500,
                    border:
                      field.value === "Administrador"
                        ? "2px solid #2C3E50"
                        : "2px solid transparent",
                    borderRadius: "16px",
                    padding: "50px 70px",
                    width: "270px",
                  }}
                  onChange={() => field.onChange("Administrador")}
                >
                  Administrador
                </ToggleButton>

                <ToggleButton
                  value="Gestor"
                  selected={field.value === "Gestor"}
                  sx={{
                    background: "#FFF",
                    boxShadow: "0px 4px 10px 0px #1F255912",
                    textTransform: "none",
                    color: "#170F49",
                    fontSize: "18px",
                    fontWeight: 500,
                    border:
                      field.value === "Gestor"
                        ? "2px solid #2C3E50"
                        : "2px solid transparent",
                    borderRadius: "16px",
                    padding: "50px 70px",
                    width: "270px",
                  }}
                  onChange={() => field.onChange("Gestor")}
                >
                  Gestor
                </ToggleButton>
              </Stack>

              <ToggleButton
                value="Operador"
                selected={field.value === "Operador"}
                sx={{
                  background: "#FFF",
                  boxShadow: "0px 4px 10px 0px #1F255912",
                  textTransform: "none",
                  color: "#170F49",
                  fontSize: "18px",
                  fontWeight: 500,
                  border:
                    field.value === "Operador"
                      ? "2px solid #2C3E50"
                      : "2px solid transparent",
                  borderRadius: "16px",
                  padding: "50px 70px",
                  width: "270px",
                }}
                onChange={() => field.onChange("Operador")}
              >
                Operador
              </ToggleButton>
            </>
          )}
        />
        {form.formState.errors.role && (
          <Typography variant="body1" sx={{ m: 1 }} color="red">
            {form.formState.errors.role.message}
          </Typography>
        )}
      </Box>
    </>
  );
}
