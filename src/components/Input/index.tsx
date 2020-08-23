import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import {
  Input as ChakraInput,
  FormControl,
  FormErrorMessage,
  FormLabel,
  VisuallyHidden,
  InputProps,
} from '@chakra-ui/core';

interface InputProp extends InputProps {
  label?: string;
}

export default function Input({ name, label, type = 'text' }: InputProp) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(
    name || ''
  );
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  function renderInput() {
    return (
      <FormControl my="1" isInvalid={!!error}>
        <FormLabel color="blue.800" mb="0" ml="1">
          {label}:
        </FormLabel>
        <ChakraInput
          name={name}
          type={type}
          defaultValue={defaultValue}
          isInvalid={!!error}
          ref={inputRef}
          placeholder={label as string}
        />
        <FormErrorMessage m="0">{error || ''}</FormErrorMessage>
      </FormControl>
    );
  }
  if (type === 'hidden')
    return <VisuallyHidden>{renderInput()}</VisuallyHidden>;
  return renderInput();
}
