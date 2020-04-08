import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

// import { useHistory } from 'react-router-dom';
import Input from '~/components/Input/';

import { CustomButton, FormStyled } from './styles';
import AuthContainer from '~/components/AuthContainer';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

export default function SingUp() {
  async function handleSubmit(data) {
    console.log(data);
  }

  return (
    <AuthContainer>
      <FormStyled schema={schema} submitFunction={handleSubmit}>
        <Input name="name" type="text" label="Name" variant="outlined" />
        <Input name="email" type="text" label="E-mail" variant="outlined" />
        <Input
          name="password"
          type="password"
          label="Password"
          variant="outlined"
        />
        <div>
          <CustomButton variant="contained" color="primary" type="submit">
            LOGIN
          </CustomButton>
          <div>
            <span>Already have an account? </span>
            <Link to="/"> Sign In</Link>
          </div>
        </div>
      </FormStyled>
    </AuthContainer>
  );
}
