import React from 'react';

import { StyledButton } from './styles';

export default function RoundButton({ color, Icon, ...rest }) {
  return (
    <StyledButton color={color} type="button" {...rest}>
      <Icon color="#fff" size="20" />
    </StyledButton>
  );
}
