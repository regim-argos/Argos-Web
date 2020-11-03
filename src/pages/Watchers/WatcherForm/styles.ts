import styled from 'styled-components';
import { Modal } from '@material-ui/core';

export const WatcherFormModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;

  > div#watcherForm {
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
      display: flex;
      width: 100%;
      flex-direction: column;
    }
  }
`;
