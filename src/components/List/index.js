import React from 'react';
import {
  MdLink,
  MdPowerSettingsNew,
  MdEdit,
  MdDelete,
  MdArrowUpward,
  MdArrowDownward,
} from 'react-icons/md';

import StyledButton from '../RoundButton';
import { WatcherList, StatusInfo } from './styles';

export default function List({
  watcher: { name, status, active, id },
  handleDelete,
}) {
  return (
    <WatcherList>
      <div>
        <StatusInfo status={status}>
          {status ? (
            <MdArrowUpward color="#fff" />
          ) : (
            <MdArrowDownward color="#fff" />
          )}
        </StatusInfo>
        <span>{name}</span>
      </div>

      <div>
        <StyledButton Icon={MdLink} color="#6081F5" />
        <StyledButton
          Icon={MdPowerSettingsNew}
          color={active ? '#44B04C' : '#9C9C9C'}
        />
        <StyledButton Icon={MdEdit} color="#DEB23C" />
        <StyledButton
          onClick={() => handleDelete(id)}
          Icon={MdDelete}
          color="#C5474B"
        />
      </div>
    </WatcherList>
  );
}
