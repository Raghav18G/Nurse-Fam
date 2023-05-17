import * as yup from "yup";

export const getSchema = () => {
  return yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required") ,
  });
};
export const getSchemaRegister = () => {
  return yup.object().shape({
    password: yup.string().required("Password is required"),
    name: yup.string().required(),
    phone: yup.string().required()
  });
};

