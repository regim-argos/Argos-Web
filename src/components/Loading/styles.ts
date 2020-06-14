import styled from 'styled-components';
import { Backdrop } from '@material-ui/core';

export const LoadingContainer = styled(Backdrop)`
  z-index: 1500 !important;
  color: #fff;
  > div {
    display: block !important;
  }
`;
