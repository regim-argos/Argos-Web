import styled from 'styled-components';
import { Modal } from '@material-ui/core';

export const MemberFormModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;

  > div#memberForm {
    background-color: #eee;
    min-width: 300px;
    width: 400px;
    max-width: 400px;
    border-radius: 10px;
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    > form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;
