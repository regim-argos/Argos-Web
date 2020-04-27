import React, { useRef } from 'react';
import * as Yup from 'yup';

import { Form as Unform } from '@unform/web';

// import { Container } from './styles';

export default function Form({
  schema,
  submitFunction,
  initialData,
  children,
  ...rest
}) {
  const formRef = useRef(null);
  async function handleSubmit(data) {
    try {
      console.log(data);
      formRef.current.setErrors({});

      const validated = await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      await submitFunction(validated);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {};
        // Validation failed
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }
  return (
    <Unform
      initialData={initialData}
      ref={formRef}
      onSubmit={handleSubmit}
      {...rest}
    >
      {children}
    </Unform>
  );
}
