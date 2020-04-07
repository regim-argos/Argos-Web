import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { CustomInput } from './styles';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <CustomInput
      inputRef={inputRef}
      defaultValue={defaultValue}
      error={!!error}
      helperText={error || ''}
      {...rest}
    />
  );
}
