import { useForm } from "react-hook-form";
import { schema } from "../../validations/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router";
import { Container, Form, Title } from "./style";
import { UserData } from "../../types/index";
import { useLogin } from "../../providers/login";
import { FormTitle } from "../register/style";
import NavBar from "../../components/navbar";

const Login = () => {
  const { signIn } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });
  const history = useHistory();

  return (
    <Container>
      <NavBar />
      <Title>Hungry Traveler</Title>
      <Form onSubmit={handleSubmit(signIn)}>
        <FormTitle>Login</FormTitle>
        <TextField
          color="info"
          sx={{
            width: "100%",
            height: "45px",
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
          }}
          label="E-mail"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          color="info"
          sx={{
            width: "100%",
            height: "45px",
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
          }}
          type="password"
          label="Senha"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          color="primary"
          variant="contained"
          sx={{
            width: "100%",
            height: "45px",
            padding: "0",
            textTransform: "none",
            fontFamily: "Righteous, cursive",
            borderRadius: "8px",
            backgroundColor: "#F5F5F5",
            color: "#E0E0E0",
          }}
          type="submit"
        >
          Entrar
        </Button>
        <p>
          Ainda não tem uma conta?
          <span
            onClick={() => {
              history.push("/login");
            }}
          >
            {" "}
            Cadastre-se
          </span>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
