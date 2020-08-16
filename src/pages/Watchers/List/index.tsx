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
import RoundButton from 'components/RoundButton';
import { useHistory } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
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
  const history = useHistory();
  return (
    <WatcherList>
      <div>
        <Tooltip title="Events" aria-label="Events" placement="top" arrow>
          <StatusInfo
            status={status}
            onClick={() => history.push(`watcherTimeLine/${id}`)}
          >
            {status ? (
              <MdArrowUpward color="#fff" />
            ) : (
              <MdArrowDownward color="#fff" />
            )}
          </StatusInfo>
        </Tooltip>
        <span>{name}</span>
      </div>

      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <RoundButton text="Url" Icon={MdLink} color="#6081F5" />
        </a>
        <RoundButton
          text={active ? 'on' : 'off'}
          Icon={MdPowerSettingsNew}
          color={active ? '#44B04C' : '#9C9C9C'}
          onClick={() => handleSave({ ...watcher, active: !active })}
        />
        <RoundButton
          text="Edit"
          Icon={MdEdit}
          color="#DEB23C"
          onClick={() => handleChange(watcher)}
        />
        <RoundButton
          text="Delete"
          onClick={() => handleDelete(id)}
          Icon={MdDelete}
          color="#C5474B"
        />
      </div>
    </WatcherList>
  );
}
