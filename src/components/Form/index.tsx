import React, { useRef, ReactNode } from 'react';
import * as Yup from 'yup';

import { Form as Unform } from '@unform/web';
import { FormHandles } from '@unform/core';

// import { Container } from './styles';
interface FormProps {
  children?: ReactNode;
  schema: Yup.Schema<any>;
  submitFunction: Function;
  initialData?: object;
}

const Form: React.FC<FormProps> = ({
  schema,
  submitFunction,
  initialData,
  children,
  ...rest
}) => {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: FormData) {
    if (formRef.current) {
      try {
        formRef.current.setErrors({});

        const validated = await schema.validate(data, {
          abortEarly: false,
        });
        // Validation passed
        await submitFunction(validated);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const validationErrors: { [x: string]: string } = {};
          // Validation failed
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
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
};

export default Form;
