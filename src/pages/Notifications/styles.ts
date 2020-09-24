import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import theme from 'styles/theme';

export const Container = styled(PerfectScrollbar)`
  display: flex;
  padding: 20px 50px;
  flex-direction: column;

  background-color: ${theme.palette.lightWhiteColor.main};
  height: 100%;
  > div {
    display: flex;
    justify-content: flex-end;
  }
  > ul {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  @media (max-width: 500px) {
    padding: 20px 10px;
  }
`;
