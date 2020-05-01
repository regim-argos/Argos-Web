import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled(PerfectScrollbar)`
  display: flex;
  padding: 20px 50px;
  flex-direction: column;
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
`;
