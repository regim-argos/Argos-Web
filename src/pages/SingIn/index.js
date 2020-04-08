import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { CustomButton, FormStyled } from './styles';
import Input from '~/components/Input/';
import AuthContainer from '~/components/AuthContainer';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

export default function SingIn() {
  const history = useHistory();

  async function handleSubmit(data) {
    console.log(data);
  }

  return (
    <AuthContainer>
      <FormStyled schema={schema} submitFunction={handleSubmit}>
        <Input name="email" type="text" label="E-mail" variant="outlined" />
        <Input
          name="password"
          type="password"
          label="Password"
          variant="outlined"
        />
        <div>
          <Link to="/"> Forgot Your Password?</Link>
          <div>
            <CustomButton variant="contained" color="primary" type="submit">
              LOGIN
            </CustomButton>
            <CustomButton
              onClick={() => history.push('/register')}
              color="primary"
              type="button"
            >
              SIGN UP
            </CustomButton>
          </div>
        </div>
      </FormStyled>
    </AuthContainer>
  );
}
