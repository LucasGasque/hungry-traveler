import { Container } from "./style";
import { TextField, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegister } from "../../providers/register";
import { UserData } from "../../types";
import { schema } from "../../validations/RegisterSchema";
import { useHistory } from "react-router";

const Register = () => {
  const { registerUser } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });
  const history = useHistory();
  return (
    <Container>
      <form onSubmit={handleSubmit(registerUser)}>
        <TextField
          label="Nome"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          label="E-mail"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Confirmar E-mail"
          {...register("emailConfirm")}
          error={!!errors.emailConfirm}
          helperText={errors.emailConfirm?.message}
        />
        <TextField
          label="Senha"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          label="Confirmar Senha"
          {...register("passwordConfirm")}
          error={!!errors.passwordConfirm}
          helperText={errors.passwordConfirm?.message}
        />
        <Button type="submit">Registrar</Button>
      </form>
    </Container>
  );
};

export default Register;
