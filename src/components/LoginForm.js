import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { fields, buttons } from "../config/authForms";

const LoginForm = () => {
  const handleClick = () => {
    console.log("YOU CLICKED ME");
  };

  return (
    <div className="form--login custom-login-form">
      <Button
        text="Log in with Facebook"
        variant="facebook"
        onClickHandler={handleClick}
      />
      <div className="divider">or</div>
      <Input field={fields.email} />
      <Input field={fields.password} />
      <Button text={buttons.submitLogIn.text} onClickHandler={handleClick} />
      <p>
        Don't have an account? <Link to="/">Sign in</Link>.
      </p>
      <p>
        Forgot password? Click here to{" "}
        <Link to="/reset-password">reset it</Link>.
      </p>
    </div>
  );
};

export default LoginForm;
