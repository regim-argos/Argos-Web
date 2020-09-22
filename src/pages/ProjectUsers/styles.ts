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
    flex-direction: column;
    margin-top: 20px;
    > li {
      display: flex;
      min-width: 100%;
      > div {
        display: flex;
        min-width: 100%;
        > span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;
