import React from 'react';
import {
  MdLink,
  MdPowerSettingsNew,
  MdEdit,
  MdDelete,
  MdArrowUpward,
  MdArrowDownward,
} from 'react-icons/md';

import IWatcher from 'Types/IWatcher';
import StyledButton from '../RoundButton';
import { WatcherList, StatusInfo } from './styles';

interface ListProps {
  watcher: IWatcher;
  handleDelete: (id: number) => void;
  handleSave: (watcher: IWatcher) => void;
  handleChange: (watcher: IWatcher) => void;
}

export default function List({
  watcher: { name, status, active, id, url },
  watcher,
  handleDelete,
  handleSave,
  handleChange,
}: ListProps) {
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
        <a href={url} target="_blank" rel="noopener noreferrer">
          <StyledButton Icon={MdLink} color="#6081F5" />
        </a>
        <StyledButton
          Icon={MdPowerSettingsNew}
          color={active ? '#44B04C' : '#9C9C9C'}
          onClick={() => handleSave({ ...watcher, active: !active })}
        />
        <StyledButton
          Icon={MdEdit}
          color="#DEB23C"
          onClick={() => handleChange(watcher)}
        />
        <StyledButton
          onClick={() => handleDelete(id)}
          Icon={MdDelete}
          color="#C5474B"
        />
      </div>
    </WatcherList>
  );
}
