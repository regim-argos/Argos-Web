import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'styles/theme';

export const NavMenuContainer = styled.nav`
  display: flex;
  .selected {
    > strong {
      font-size: 20px;
      color: #ffa751;
    }
    > div {
      background: #ffa751;
    }
  }
`;

export const NavTab = styled(NavLink).attrs(() => ({
  activeClassName: 'selected',
}))`
  flex: 1;
  background: ${theme.palette.primary.main};
  display: flex;
  border: none;
  height: 46px;
  text-decoration: none;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 1.2px;
  flex-direction: column;
  > strong {
    margin-top: 10px;
    color: #eee;
    font-size: 18px;
  }
  > div {
    height: 4px;
    width: 100%;
  }
`;
