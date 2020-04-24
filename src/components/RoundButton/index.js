import React from 'react';

import { MdAdd } from 'react-icons/md';
import { StyledButton } from './styles';

export default function RoundButton({
  color = '#6081F5',
  Icon = MdAdd,
  ...rest
}) {
  return (
    <StyledButton color={color} type="button" {...rest}>
      <Icon color="#fff" size="20" />
    </StyledButton>
  );
}
