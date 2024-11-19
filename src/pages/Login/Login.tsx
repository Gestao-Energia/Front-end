import React, { useContext } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertContext } from "../../hooks/useAlert";

const loginSchema = z.object({
  email: z.string().email("Campo deve conter um e-mail valido").min(1, { message: 'ampo e-mail obrigatório' }),
  password: z.string().min(5, 'A senha deve conter pelo menos 5 caracteres')
})

type LoginSchema = z.infer<typeof loginSchema>

const Login: React.FC = () => {
  const { showAlert } = useContext(AlertContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  });


  const onSubmit = async  (data: LoginSchema) => {
    const response = await fetch("/api/login", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (!response.ok) {
      showAlert({
        title: 'Erro',
        message: 'ocorreu um erro ao fazer o login',
        severity: 'error',
      });
    }

    showAlert({
      title: 'Sucesso',
      message: 'Login realizado com sucesso',
      severity: 'success',
    });

    reset();
  };


  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          sx={{ mt: 2, width: "100%" }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            {...register('email')}
            margin="normal"
            fullWidth
            label="E-mail"
            type="email"
          />
          {errors.email && (
            <Typography variant="body1" sx={{ m: 1 }} color="red">
              {errors?.email?.message}
            </Typography>
          )}
          <TextField
            margin="normal"
            fullWidth
            label="Senha"
            type="password"
            {...register('password')}
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
            sx={{ mt: 3 }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
