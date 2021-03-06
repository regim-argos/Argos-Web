import styled from 'styled-components';
import theme from 'styles/theme';

export const NotificationList = styled.li`
  padding: 10px 5px;
  background-color: #0852bc;
  border-radius: 30px;

  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  + li {
    margin-top: 25px;
  }
  > div:nth-child(1) {
    display: flex;
    margin: 0 10px;
    overflow: hidden;
    width: 100%;
    align-items: center;
    > span {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
      margin: 10px;
      color: #fff;
    }
    > div {
      flex-shrink: 0;
    }
  }
  > div:nth-child(2) {
    display: flex;

    > a {
      margin-right: 7px;
    }
    > button {
      margin-right: 7px;
    }
  }
  > div:nth-child(3) {
    display: none;
  }
  @media (max-width: 500px) {
    padding: 10px 5px;
    background-color: ${theme.palette.primary.main};
    border-radius: 30px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    + li {
      margin-top: 25px;
    }
    > div:nth-child(1) {
      display: flex;
      width: 100%;
      align-items: center;

      > span {
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
        color: #fff;
      }
    }
    > div:nth-child(2) {
      display: none;
    }
    > div:nth-child(3) {
      display: flex;
      border-radius: 50%;
      margin-right: 5px;

      > button {
        display: flex;
        width: 34px;
        height: 35px;
        > span {
          width: 34px;
          height: 35px;
          color: #fff;
        }
      }
    }
  }
`;
