import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import {fields, buttons} from '../config/authForms';

const LoginForm = () => {

  const handleSubmit = () => {
    console.log('Form submitted!');
  }
  return (
    <div className="form--login" data-sample="I'm lazy today">
      <Button
        text="Log in with Facebook"
        variant="facebook"
        onClickHandler={() => {}}
      />
      <div className="divider">or</div>
      <Input field={fields.email} />
      <Input field={fields.password} />
      <Button
        text={buttons.submitLogIn.text}
        onClickHandler={handleSubmit}
      />
      <p>Don't have an account? <Link to="/">Sign in</Link>.</p>
      <p>Forgot password? Click here to <Link to="/reset-password">reset it</Link>.</p>
    </div>
  );
}

export default LoginForm;
