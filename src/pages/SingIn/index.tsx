import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import Input from 'components/Input/';
import AuthContainer from 'components/AuthContainer';
import { signInRequest } from 'store/modules/auth/actions';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import { CustomButton, FormStyled } from './styles';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

export default function SingIn() {
  const history = useHistory();

  const loading = useSelector<ArgosReduxStates, boolean>(
    (state) => state.auth.loading
  );
  const dispatch = useDispatch();

  async function handleSubmit({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    dispatch(signInRequest(email, password));
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
          <Link to="/forgetPasswordRequest"> Forgot Your Password?</Link>
          <div>
            <CustomButton variant="contained" color="primary" type="submit">
              {loading ? 'Loading...' : 'Login'}
            </CustomButton>
            <CustomButton
              onClick={() => history.push('/register')}
              color="primary"
              type="submit"
            >
              SIGN UP
            </CustomButton>
          </div>
        </div>
      </FormStyled>
    </AuthContainer>
  );
}
