import styled, { css } from 'styled-components';
import Input from '../Input';

export const ItemList = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 20px;
  max-height: 120px;
  overflow: auto;
  flex-direction: column;

  ${(props) =>
    props.isEmpty &&
    css`
      margin-bottom: 0px;
    `}
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

export const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: 15px;
  margin: 0px;
  justify-content: center;
  align-self: center;
`;
