import { useForm } from "react-hook-form";
import { schema } from "../../validations/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router";
import { Container } from "./style";
import { UserData } from "../../types/index";
import { useLogin } from "../../providers/login";

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
      <form onSubmit={handleSubmit(signIn)}>
        <TextField
          label="E-mail"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Senha"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </form>
    </Container>
  );
};

export default Login;
