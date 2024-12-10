import React from "react";
import { Box, Button, Typography, Grid2 } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import rionegro from "../../assets/rionegro-login.jpg";
import logo from "../../assets/logo.png";
import TextInputDefault from "../../components/TextInputDefault";
import LogoGoverno from "../../assets/logo-gov-horizontal-contraste 1.png";
import { useAuth } from "../../hooks/useAuth";

const loginSchema = z.object({
  email: z
    .string()
    .email("Campo deve conter um e-mail valido")
    .min(1, { message: "ampo e-mail obrigatório" }),
  password: z.string().min(1, "A senha deve conter pelo menos 5 caracteres"),
});

type LoginSchema = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const auth = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    auth?.loginAction(data);
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
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <TextInputDefault
                  label={"Email"}
                  placeholder="Digite o seu Email"
                  value={field.value ?? ""}
                  onChange={(e) => field.onChange(e.target.value)}
                />

                {errors.email && (
                  <Typography variant="body1" sx={{ m: 1 }} color="red">
                    {errors?.email?.message}
                  </Typography>
                )}
              </>
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <>
                <TextInputDefault
                  label={"Senha"}
                  placeholder="Digite a sua Senha"
                  value={field.value ?? ""}
                  type="password"
                  onChange={(e) => field.onChange(e.target.value)}
                />

                {errors.password && (
                  <Typography variant="body1" sx={{ m: 1 }} color="red">
                    {errors?.password?.message}
                  </Typography>
                )}
              </>
            )}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting || !isValid}
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
