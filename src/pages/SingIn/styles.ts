import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import Form from 'components/Form';
import theme from 'styles/theme';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * + * {
    margin-top: 10px !important;
  }
  > div:last-child {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 25px !important;
    > a {
      margin-top: 7px;
      text-decoration: none;
      font-family: roboto;
      font-size: 14px;
      font-weight: 700;
      color: ${theme.palette.primary.main};
      opacity: 0.8;
      transition: 0.3s;
      max-height: 30px;
    }
    > a:hover {
      opacity: 1;
    }
    > div:last-child {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const CustomInput = styled(TextField)`
  + * {
    margin-top: 15px !important;
  }
`;

export const CustomButton = styled(Button)`
  + * {
    margin-top: 10px !important;
  }
`;
