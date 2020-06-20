import React from 'react';

import { MdAdd } from 'react-icons/md';
import { Tooltip } from '@material-ui/core';
import { StyledButton } from './styles';

export default function RoundButton({
  color = '#6081F5',
  Icon = MdAdd,
  text = '',
  ...rest
}) {
  return (
    <Tooltip title={text} aria-label={text} placement="top" arrow>
      <StyledButton color={color} type="button" {...rest}>
        <Icon color="#fff" size="20" />
      </StyledButton>
    </Tooltip>
  );
}
