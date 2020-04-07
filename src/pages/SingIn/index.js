import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, CustomButton } from './styles';
import Input from '~/components/Input/';

export default function SingIn() {
  const history = useHistory();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      console.log('asdas');
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {};
        // Validation failed
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
        console.log(validationErrors);
      }
    }
  }

  return (
    <Container>
      <div>
        <h1>ARGOS</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" type="text" label="E-mail" variant="outlined" />
          <Input
            name="password"
            type="text"
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
        </Form>
      </div>
    </Container>
  );
}
