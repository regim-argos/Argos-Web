import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    height: 450px;
    width: 400px;
    background-color: #eee;
    border-radius: 10px;
    padding: 25px;
    > h1 {
      color: #1089ff;
      font-family: lato;
      font-size: 55px;
      text-align: center;
      margin-bottom: 30px;
    }
    > form {
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
