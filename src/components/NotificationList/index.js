import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

import StyledButton from '../RoundButton';
import { NotificationList } from './styles';

export default function List({
  notification: { platform, id },
  notification,
  handleDelete,
  handleSave,
  handleChange,
}) {
  return (
    <NotificationList>
      <div>
        <span>{platform}</span>
      </div>
      <div>
        <StyledButton Icon={MdEdit} color="#DEB23C" />
        <StyledButton
          Icon={MdDelete}
          color="#C5474B"
          onClick={() => handleDelete(id)}
        />
      </div>
    </NotificationList>
  );
}
