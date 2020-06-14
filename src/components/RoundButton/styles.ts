import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.3);
`;
