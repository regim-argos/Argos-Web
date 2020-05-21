import styled from 'styled-components';
import theme from '~/styles/theme';

export const NavContainer = styled.nav`
  height: 60px;
  width: 100%;
  padding: 5px 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.palette.primary.main};
  > div {
    display: flex;
    > img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.3);
      margin-right: 10px;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > h1 {
    margin-left: 16px;
    font-family: lato;
    font-size: 29px;
    color: #e5e5e5;
  }

  > img {
    padding-top: 4px;
    width: 32px;
    height: 32px;
  }
`;
