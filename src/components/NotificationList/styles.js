import styled from 'styled-components';

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
  > div {
    display: flex;

    margin: 0 10px;
    align-items: center;
    > span {
      font-weight: bold;
      margin: 10px;
      color: #fff;
    }
  }
  > div {
    display: flex;
    > a {
      display: flex;
      margin-right: 7px;
    }
    > button {
      margin-right: 7px;
    }
  }
`;
