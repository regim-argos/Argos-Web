import React from 'react';
import { MdEdit, MdDelete, MdPowerSettingsNew } from 'react-icons/md';

import StyledButton from '../RoundButton';
import { NotificationList } from './styles';

export default function List({
  notification: { platform, id, active, name },
  notification,
  handleDelete,
  handleSave,
  handleEditNotification,
}) {
  return (
    <NotificationList>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <StyledButton
          Icon={MdPowerSettingsNew}
          color={active ? '#44B04C' : '#9C9C9C'}
          onClick={() => handleSave({ ...notification, active: !active })}
        />
        <StyledButton
          Icon={MdEdit}
          color="#DEB23C"
          onClick={() => handleEditNotification(notification)}
        />
        <StyledButton
          Icon={MdDelete}
          color="#C5474B"
          onClick={() => handleDelete(id)}
        />
      </div>
    </NotificationList>
  );
}
