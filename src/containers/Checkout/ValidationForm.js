import * as Yup from "yup";

const cardRegExp = /^(\d{16})$/g;
const cvv2RegExp = /^(\d{3})$/g;
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/g;


export const ValidationForm = Yup.object().shape({
  firstName: Yup.string()
      .min(2, "length must be bigger than 2!")
      .max(20, "length must be less then 20!")
      .required("First name is required"),
  lastName: Yup.string()
      .min(2, "length must be bigger than 2!")
      .max(20, "length must be less then 20!")
      .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
      .matches(phoneRegExp, "Invalid phone number")
      .required("Phone number is required"),
  address: Yup.string()
      .min(2, "length must be bigger than 2!")
      .max(100, "length must be less then 100!")
      .required("Address is required"),
  cardNumber: Yup.string()
      .matches(cardRegExp, "invalid card")
      .required("Card is required"),
  cvv2: Yup.string()
      .matches(cvv2RegExp, "invalid cvv")
      .required("cvv is required"),
});
