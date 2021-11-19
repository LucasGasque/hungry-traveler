import { Container, Form, FormTitle, Title } from "./style";
import { Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegister } from "../../providers/register";
import { UserData } from "../../types";
import { schema } from "../../validations/RegisterSchema";
import { Redirect, useHistory } from "react-router-dom";
import NavBar from "../../components/navBar";
import { useLogin } from "../../providers/login";

const Register = () => {
  const { registerUser } = useRegister();
  const { token } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });
  const history = useHistory();


  return (
    <>
      {!token ? (
        <Container>
          <NavBar />
          <Title>Hungry Traveler</Title>
          <Form onSubmit={handleSubmit(registerUser)}>
            <FormTitle>Cadastro</FormTitle>
            <TextField
              color="primary"
              sx={{
                width: "100%",
                maxWidth: "340px",
                height: "45px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
              label="Nome"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              color="primary"
              sx={{
                width: "100%",
                maxWidth: "340px",
                height: "45px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
              label="E-mail"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              color="primary"
              sx={{
                width: "100%",
                maxWidth: "340px",
                height: "45px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
              label="Confirmar E-mail"
              {...register("emailConfirm")}
              error={!!errors.emailConfirm}
              helperText={errors.emailConfirm?.message}
            />
            <TextField
              color="primary"
              sx={{
                width: "100%",
                maxWidth: "340px",
                height: "max-content",
                borderRadius: "8px",
              }}
              type="password"
              label="Senha"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              color="primary"
              sx={{
                width: "100%",
                maxWidth: "340px",
                height: "45px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
              type="password"
              label="Confirmar Senha"
              {...register("passwordConfirm")}
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
            />
            <Button
              color="secondary"
              variant="contained"
              sx={{
                width: "100%",
                maxWidth: "340px",
                height: "45px",
                padding: "0",
                textTransform: "none",
                fontFamily: "Righteous, cursive",
                borderRadius: "8px",
              }}
              type="submit"
            >
              Cadastrar
            </Button>
            <p>
              Já tem uma conta?
              <span
                onClick={() => {
                  history.push("/login");
                }}
              >
                {" "}
                Clique aqui
              </span>
            </p>
          </Form>
        </Container>
      ) : (
        <Redirect to="/dashboard" />
      )}
    </>
  );
};

export default Register;
