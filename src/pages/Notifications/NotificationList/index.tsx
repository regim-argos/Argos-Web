import React from 'react';
import { MdEdit, MdDelete, MdPowerSettingsNew } from 'react-icons/md';

import INotification from 'Types/INotification';
import RoundButton from 'components/RoundButton';
import { NotificationList } from './styles';

interface ListProps {
  notification: INotification;
  handleDelete: (id: number) => void;
  handleSave: (watcher: INotification) => void;
  handleEditNotification: (watcher: INotification) => void;
}

export default function List({
  notification: { id, active, name },
  notification,
  handleDelete,
  handleSave,
  handleEditNotification,
}: ListProps) {
  return (
    <NotificationList>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <RoundButton
          text={active ? 'on' : 'off'}
          Icon={MdPowerSettingsNew}
          color={active ? '#44B04C' : '#9C9C9C'}
          onClick={() => handleSave({ ...notification, active: !active })}
        />
        <RoundButton
          text="Edit"
          Icon={MdEdit}
          color="#DEB23C"
          onClick={() => handleEditNotification(notification)}
        />
        <RoundButton
          text="Delete"
          Icon={MdDelete}
          color="#C5474B"
          onClick={() => handleDelete(id)}
        />
      </div>
    </NotificationList>
  );
}
