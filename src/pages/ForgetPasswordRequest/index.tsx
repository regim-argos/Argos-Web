import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import {
  forgetPasswordRequest,
  confirmEmailRequest,
} from 'store/modules/auth/actions';
import AuthContainer from 'components/AuthContainer';
import { FormStyled, CustomButton } from 'pages/SingIn/styles';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import Input from 'components/Input';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
});

export default function ForgetPasswordRequest() {
  const history = useHistory();

  const dispatch = useDispatch();
  const loading = useSelector<ArgosReduxStates, boolean>(
    (state) => state.auth.loading
  );
  const needConfirmEmail = useSelector<ArgosReduxStates, boolean>(
    (state) => state.auth.needConfirmEmail
  );

  function onSubmit({ email }: { email: string }) {
    if (needConfirmEmail) {
      dispatch(confirmEmailRequest(email));
    } else {
      dispatch(forgetPasswordRequest(email));
    }
  }
  return (
    <AuthContainer>
      <FormStyled schema={schema} submitFunction={onSubmit}>
        <span>
          {needConfirmEmail
            ? 'Send email to email confirmation'
            : 'Send email to change password'}
        </span>
        <Input name="email" type="text" label="E-mail" variant="outlined" />
        <CustomButton variant="contained" color="primary" type="submit">
          {loading ? 'Loading...' : 'Send email'}
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
