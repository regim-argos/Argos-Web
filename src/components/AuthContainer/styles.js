import styled from 'styled-components';
import theme from '~/styles/theme';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 400px;
    background-color: #eee;
    border-radius: 10px;
    padding: 25px;
    > h1 {
      color: ${theme.palette.primary.main};
      font-family: lato;
      font-size: 55px;
      text-align: center;
      margin-bottom: 30px;
    }
  }
`;
