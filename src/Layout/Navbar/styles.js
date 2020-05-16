import styled from 'styled-components';

export const NavContainer = styled.nav`
  height: 60px;
  width: 100%;
  padding: 5px 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a2b3d;
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
