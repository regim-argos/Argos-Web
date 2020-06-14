import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import {
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@material-ui/core';

// import { Form } from './styles';

interface SelectInputProps {
  name: string;
  options: { value: string; label: string }[];
  variant: 'standard' | 'filled' | 'outlined' | undefined;
  label: string;
}

export default function SelectInput({
  name,
  options,
  label,
  ...rest
}: SelectInputProps) {
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
      <InputLabel htmlFor={`${label}-id`}>{label}</InputLabel>
      <Select
        labelId={`${label}-id`}
        inputRef={inputRef}
        defaultValue={defaultValue}
        error={!!error}
        native
        // helperText={error || ''}
        {...rest}
      >
        {options.map(({ label: optionLabel, value }) => (
          <option key={value} value={value}>
            {optionLabel}
          </option>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
