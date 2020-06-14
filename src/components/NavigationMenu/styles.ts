import styled from 'styled-components';

export const NavMenuContainer = styled.nav`
  display: flex;
  flex: 1;
`;

export const NavButton = styled.button<{ a: boolean }>`
  flex: 1;
  color: #fff;
  background: ${(props) => (props.a ? '#6081F5' : '#0852BC')};
  justify-content: center;
  font-size: 18px;
  align-items: center;
  border: none;
  height: 46px;
`;
