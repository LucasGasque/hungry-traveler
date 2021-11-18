import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("Formato inválido"),
  password: yup
    .string()
    .required("Campo obrigatório"),
});
