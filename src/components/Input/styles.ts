import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const CustomInput = styled(TextField)`
  + * {
    margin-top: 15px !important;
  }
`;
