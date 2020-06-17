import styled from 'styled-components';
import Input from '../Input';

export const Container = styled.div`
  margin-top: 10px;
`;
export const ItemList = styled.ul`
  display: none;
`;
export const Item = styled.li`
  display: flex;
  background-color: #0852bc;
  padding: 0px 4px;
  height: 40px;
  border-radius: 25px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  + li {
    margin-top: 10px;
  }

  > span {
    margin-left: 5px;
    color: #fff;
    font-size: 14px;
  }
`;

export const HiddenInput = styled(Input)``;
