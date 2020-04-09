import React from 'react';

import { StyledButton } from './styles';

export default function RoundButton({ children, color, Icon }) {
  return (
    <StyledButton color={color} type="button">
      <Icon color="#fff" size="20" />
    </StyledButton>
  );
}
