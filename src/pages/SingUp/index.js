import React from 'react';
import { Link } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';

import { Container, CustomInput, CustomButton } from './styles';

export default function SingUp() {
  // const history = useHistory();

  return (
    <Container>
      <div>
        <h1>ARGOS</h1>
        <form>
          <CustomInput type="text" label="Name" variant="outlined" />
          <CustomInput type="text" label="E-mail" variant="outlined" />
          <CustomInput type="text" label="Password" variant="outlined" />
          <div>
            <CustomButton variant="contained" color="primary" type="button">
              LOGIN
            </CustomButton>
            <div>
              <span>Already have an account? </span>
              <Link to="/"> Sign In</Link>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}
