import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useParams, useHistory } from 'react-router-dom';

import Input from 'components/Input';
import { CustomButton, FormStyled } from 'pages/SingIn/styles';
import AuthContainer from 'components/AuthContainer';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import { forgetPasswordPutRequest } from 'store/modules/auth/actions';

const schema = Yup.object().shape({
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string().when(
    'password',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (password: string, field: any) =>
      password
        ? field
            .required()
            .oneOf(
              [Yup.ref('password')],
              "Password and confirm password aren't equals"
            )
        : field
  ),
});

export default function ForgetPasswordForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { hash } = useParams();

  const loading = useSelector<ArgosReduxStates, boolean>(
    (state) => state.auth.loading
  );

  function onSubmit({
    password,
    confirmPassword,
  }: {
    password: string;
    confirmPassword: string;
  }) {
    dispatch(forgetPasswordPutRequest(password, confirmPassword, hash));
  }
  return (
    <AuthContainer>
      <FormStyled schema={schema} submitFunction={onSubmit}>
        <h3>Change Your Password</h3>
        <Input
          name="password"
          type="password"
          label="New Password"
          variant="outlined"
        />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm New Password"
          variant="outlined"
        />

        <CustomButton variant="contained" color="primary" type="submit">
          {loading ? 'Loading...' : 'Confirm'}
        </CustomButton>
        <CustomButton
          onClick={() => history.push('/')}
          color="primary"
          type="submit"
        >
          Cancel
        </CustomButton>
      </FormStyled>
    </AuthContainer>
  );
}
