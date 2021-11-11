import { Container, Form, FormTitle, Title } from "./style";
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
      <Title>Hungry Traveler</Title>
      <Form onSubmit={handleSubmit(registerUser)}>
        <FormTitle>Cadastro</FormTitle>
        <TextField
          sx={{
            width: "100%",
            height: "45px",
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
          }}
          size="small"
          variant="outlined"
          color="info"
          label="Nome"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          sx={{
            width: "100%",
            height: "45px",
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
          }}
          size="small"
          variant="outlined"
          color="info"
          label="E-mail"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          sx={{
            width: "100%",
            height: "45px",
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
          }}
          size="small"
          variant="outlined"
          color="info"
          label="Confirmar E-mail"
          {...register("emailConfirm")}
          error={!!errors.emailConfirm}
          helperText={errors.emailConfirm?.message}
        />
        <TextField
          sx={{
            width: "100%",
            height: "45px",
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
          }}
          type="password"
          size="small"
          variant="outlined"
          color="info"
          label="Senha"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          sx={{
            width: "100%",
            height: "45px",
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
          }}
          type="password"
          size="small"
          variant="outlined"
          color="info"
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
  );
};

export default Register;
