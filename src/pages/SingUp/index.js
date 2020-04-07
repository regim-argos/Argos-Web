import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

// import { useHistory } from 'react-router-dom';
import Input from '~/components/Input/';

import { Container, CustomButton } from './styles';

export default function SingUp() {
  const formRef = useRef(null);
  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required(),
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
          <Input name="name" type="text" label="Name" variant="outlined" />
          <Input name="email" type="text" label="E-mail" variant="outlined" />
          <Input
            name="password"
            type="text"
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
        </Form>
      </div>
    </Container>
  );
}
