import { Container, Form } from "./style";
import { Button, TextField } from "@mui/material";
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
      <Form onSubmit={handleSubmit(registerUser)}>
        <h1>Cadastro</h1>
        <TextField
          size="small"
          variant="outlined"
          color="info"
          label="Nome"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          size="small"
          variant="outlined"
          color="info"
          label="E-mail"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          size="small"
          variant="outlined"
          color="info"
          label="Confirmar E-mail"
          {...register("emailConfirm")}
          error={!!errors.emailConfirm}
          helperText={errors.emailConfirm?.message}
        />
        <TextField
          size="small"
          variant="outlined"
          color="info"
          label="Senha"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          size="small"
          variant="outlined"
          color="info"
          label="Confirmar Senha"
          {...register("passwordConfirm")}
          error={!!errors.passwordConfirm}
          helperText={errors.passwordConfirm?.message}
        />
        <Button
          color="primary"
          variant="contained"
          sx={{
            width: "100%",
            height: "40px",
          }}
          type="submit"
        >
          Registrar
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
  );
};

export default Register;
