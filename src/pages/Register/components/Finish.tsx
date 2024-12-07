import { Button, Stack, Typography } from "@mui/material";
import finishImage from "../../../assets/UserRegistrationFinish.png";
import { useRegisterUserFormContext } from "../../../hooks/useRegisterUserFormContext";

export default function FinishUserRegistration() {
  const { form, onSubmit } = useRegisterUserFormContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form.getValues());
  };

  return (
    <Stack direction={"column"} alignItems={"center"} justifyContent={"center"}>
      <img src={finishImage} loading="lazy" />
      <Typography
        variant="h5"
        fontSize={"24px"}
        fontWeight={"700"}
        mt={1}
        mb={2}
      >
        Cadastro concluído
      </Typography>
      <Typography variant="body2" color="#6F6C90" mb={4} maxWidth={495}>
        Por favor, revise todas as informações que você digitou nas etapas
        anteriores e, se tudo estiver correto, envie sua mensagem para confirmar
        o cadastro do usuário
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: "#2C3E50",
          borderRadius: "40px",
          color: "#FFF",
          fontSize: "18px",
          fontWeight: 700,
          padding: "20px 60px",
        }}
        onClick={handleSubmit}
      >
        Enviar
      </Button>
    </Stack>
  );
}
