import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > ul {
    flex-shrink: 0;
    width: 100%;
    max-width: 600px;
  }
`;
