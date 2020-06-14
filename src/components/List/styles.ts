import styled from 'styled-components';

export const WatcherList = styled.li`
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

export const StatusInfo = styled.div<{ status: boolean }>`
  height: 35px;
  width: 34px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? '#44B04C' : '#C5474B')};
  margin: 0 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.3);
`;
