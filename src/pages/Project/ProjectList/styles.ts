import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import theme from 'styles/theme';

export const Container = styled(PerfectScrollbar)`
  display: flex;
  padding: 20px 50px;
  flex-direction: column;
  height: 100%;
  background-color: ${theme.palette.lightWhiteColor.main};

  > div {
    display: flex;
    justify-content: flex-end;
  }
  > ul {
    display: flex;
    margin-top: 20px;
    list-style: none;
    > li {
      width: 300px;
      min-height: 200px;
      > div {
        height: 100%;
        display: flex;
        justify-content: center;
        > button {
          display: flex;
          height: 100%;
          align-items: center;
        }
      }
    }
    > li + li {
      margin-left: 20px;
    }
  }
`;
