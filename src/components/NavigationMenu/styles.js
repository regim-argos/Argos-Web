import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavMenuContainer = styled.nav`
  display: flex;
  .selected {
    > strong {
      font-size: 20px;
      background: linear-gradient(to right, #9bafd9, #4867a5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    > div {
      background: linear-gradient(to right, #9bafd9, #4867a5);
    }
  }
`;

export const NavTab = styled(NavLink).attrs(() => ({
  activeClassName: 'selected',
}))`
  flex: 1;
  background: #1a2b3d;
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
