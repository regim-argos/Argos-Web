import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import {
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@material-ui/core';

// import { Form } from './styles';

export default function SelectInput({ name, options, ...rest }) {
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
    <FormControl variant="outlined">
      <InputLabel htmlFor={`${rest.label}-id`}>{rest.label}</InputLabel>
      <Select
        labelId={`${rest.label}-id`}
        inputRef={inputRef}
        defaultValue={defaultValue}
        error={!!error}
        native
        // helperText={error || ''}
        {...rest}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      {error && <FormHelperText>{error || ''}</FormHelperText>}
    </FormControl>
  );
}
