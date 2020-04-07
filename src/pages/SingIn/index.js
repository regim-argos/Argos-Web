import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, CustomButton, CustomInput } from './styles';

export default function SingIn() {
  const history = useHistory();

  return (
    <Container>
      <div>
        <h1>ARGOS</h1>
        <form>
          <CustomInput type="text" label="E-mail" variant="outlined" />
          <CustomInput type="text" label="Password" variant="outlined" />
          <div>
            <Link to="/"> Forgot Your Password?</Link>
            <div>
              <CustomButton variant="contained" color="primary" type="button">
                LOGIN
              </CustomButton>
              <CustomButton
                onClick={() => history.push('/register')}
                color="primary"
                type="button"
              >
                SING UP
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}
