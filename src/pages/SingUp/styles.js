import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Form from '~/components/Form';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > div:last-child {
    display: flex;
    flex-direction: column;
    > div:last-child {
      display: flex;
      justify-content: center;
      > span {
        color: #424242;
        font-family: roboto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      > a {
        margin-left: 5px;
        text-decoration: none;
        font-family: roboto;
        font-size: 17px;
        font-weight: 700;
        color: #1089ff;
        opacity: 0.8;
        transition: 0.3s;
      }
      > a:hover {
        opacity: 1;
      }
    }
  }
`;

export const CustomButton = styled(Button)`
  + * {
    margin-top: 10px !important;
  }
`;
