import { object, string } from "yup";

const required_message = "Bu alan zorunludur.";
const email_message = "Lütfen geçerli bir e-mail adresi giriniz";

const contactSchema = object({
  firstName: string("sss").required(required_message),
  lastName: string().required(required_message),
  email: string().email(email_message).required(required_message),
  message: string()
    .min(5, "Minimum 5 karakter giriniz.")
    .required(required_message),
});

export default contactSchema;
