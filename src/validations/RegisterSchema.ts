import * as yup from "yup";

const regex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{6,})");

export const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("Formato inválido"),
  emailConfirm: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("email"), null], "E-mails não conferem"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      regex,
      "Deve conter pelo menos uma letra maiúscula, minúscula e um número e no mínimo 6 dígitos"
    ),
  passwordConfirm: yup
    .string()
    .required("Campo Obrigatório")
    .oneOf([yup.ref("password"), null], "Senhas não conferem"),
});
