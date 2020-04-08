import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    height: 100vh;
    max-width: 1200px;
    width: 100%;
    background-color: #121f2b;

    display: flex;
    flex-direction: column;

    > nav {
      height: 60px;
      width: 100%;
      padding: 5px 50px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #1a2b3d;

      > h1 {
        font-family: lato;
        font-size: 29px;
        color: #e5e5e5;
      }
    }
    > div {
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
    }
  }
`;
