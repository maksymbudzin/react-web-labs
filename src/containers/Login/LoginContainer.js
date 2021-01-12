import React, { useState } from "react";
import { Formik } from "formik";
import {
  LogContainer,
  Title,
  SignUpLink,
  LoginForm,
  SignUp,

} from "./LoginContainer.styled";
import InputField from "../../components/FieldInput/FieldInput";
import { LogValidationForm } from "./LogValidationForm";
import { ButtonPB } from "../../components/ButtonGreenBlack/ButtonGreenBlack.styled";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";



const LoginContainer = () => {
  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const checkUser = (values) => {
    if (
      localStorage.getItem("email-global") == values["email"] &&
      localStorage.getItem("password-global") == values["password"]
    ) {
      localStorage.setItem("email-local", values["email"]);
      localStorage.setItem("password-local", values["password"]);

      history.push("");
      window.location.reload();
      scrollUp();

    } else {
      setModalIsOpen(true);
    }
  };
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <LogContainer>

      <Title>Log In</Title>
      {modalIsOpen ? (
        <Alert
          variant="filled"
          severity="error"
          style={{ position: "absolute", marginBottom: "20rem" }}
        >
          Your login data is incorrect. Try again please.
        </Alert>
      ) : (
        <></>
      )}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LogValidationForm}
        onSubmit={checkUser}
      >
        {({ handleSubmit }) => (
          <LoginForm>
            <InputField title="Email" name="email" type="text" />
            <InputField title="Password" name="password" type="password" />
              <SignUp>
                  {"or "}
                  <SignUpLink to="signup">Sign Up</SignUpLink>
              </SignUp>
            <ButtonPB onClick={handleSubmit} style={{marginTop : "2rem"}} >Login</ButtonPB>

          </LoginForm>
        )}
      </Formik>
      ;
    </LogContainer>
  );
};

export default LoginContainer;
