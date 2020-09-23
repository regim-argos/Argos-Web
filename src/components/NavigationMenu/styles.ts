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
  @media (max-width: 500px) {
    .selected {
      svg {
        color: #ffa751;
      }
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
  > svg {
    display: none;
  }
  > strong {
    margin-top: 10px;
    color: #eee;
    font-size: 18px;
  }
  > div {
    height: 4px;
    width: 100%;
  }
  @media (max-width: 500px) {
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
    > svg {
      color: #eee;
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 80%;
    }
    > strong {
      display: none;
    }
    > div {
      height: 4px;
      width: 100%;
    }
  }
`;
