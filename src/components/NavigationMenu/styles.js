import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavMenuContainer = styled.nav`
  display: flex;
  .selected {
    background-color: #6081f5;
    font-size: 20px;
  }
`;

export const NavTab = styled(NavLink).attrs(() => ({
  activeClassName: 'selected',
}))`
  flex: 1;
  background: #0852bc;
  display: flex;
  border: none;
  height: 46px;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.2px;
  transition: 0.4s;
`;
