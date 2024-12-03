import React, { useContext } from "react";
import { Box, Button, TextField, Typography, Grid2 } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertContext } from "../../hooks/useAlert";
import rionegro from "../../assets/rionegro-login.jpg";
import logo from "../../assets/logo.png";
import TextInputDefault from "../../components/TextInputDefault";
import LogoGoverno from "../../assets/logo-gov-horizontal-contraste 1.png";

const loginSchema = z.object({
  email: z
    .string()
    .email("Campo deve conter um e-mail valido")
    .min(1, { message: "ampo e-mail obrigatório" }),
  password: z.string().min(5, "A senha deve conter pelo menos 5 caracteres"),
});

type LoginSchema = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { showAlert } = useContext(AlertContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      showAlert({
        title: "Erro",
        message: "ocorreu um erro ao fazer o login",
        severity: "error",
      });
    }

    showAlert({
      title: "Sucesso",
      message: "Login realizado com sucesso",
      severity: "success",
    });

    reset();
  };

  return (
    <Grid2
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        minHeight: "100vh",
        width: "100vw",
        // padding: 0,
        //margin: 0,
        backgroundColor: "#2C3E50",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${rionegro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          flex: 1,
          height: "100vh",
          width: "100%",
        }}
      ></Box>

      <Box
        sx={{
          // mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
          padding: 9.125,
          color: "#fff",
          gap: 2.5,
        }}
      >
        <img src={logo} />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Typography
          component="h3"
          variant="body1"
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          Insira suas credenciais para acessar sua conta
        </Typography>

        <Box
          component="form"
          sx={{
            mt: 2,
            width: 415,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextInputDefault
            label={"Email"}
            placeholder="Digite o seu Email"
            {...register("email")}
          />

          {errors.email && (
            <Typography variant="body1" sx={{ m: 1 }} color="red">
              {errors?.email?.message}
            </Typography>
          )}
          <TextInputDefault
            label={"Senha"}
            placeholder="Digite a sua Senha"
            {...register("password")}
          />

          {errors.password && (
            <Typography variant="body1" sx={{ m: 1 }} color="red">
              {errors?.password?.message}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
            sx={{ mt: 5 }}
          >
            Login
          </Button>
        </Box>
        <Box mt={"auto"}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "64px",
              // lineHeight: "96px",
            }}
          >
            SEAD
          </Typography>
          <img src={LogoGoverno} alt="Logo do Governo do Amazonas" />
        </Box>
      </Box>
    </Grid2>
  );
};

export default Login;
