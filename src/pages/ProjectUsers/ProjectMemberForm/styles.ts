import styled from 'styled-components';
import { Modal } from '@material-ui/core';

export const MemberFormModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;

  > div#memberForm {
    background-color: #eee;
    border-radius: 10px;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    > form {
      display: flex;
      flex-direction: column;
    }
  }
`;
