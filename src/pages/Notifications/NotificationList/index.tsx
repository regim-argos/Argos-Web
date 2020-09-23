import React from 'react';
import {
  MdEdit,
  MdDelete,
  MdPowerSettingsNew,
  MdMoreVert,
} from 'react-icons/md';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 35;
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MdMoreVert />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '15ch',
            },
          }}
        >
          <MenuItem
            onClick={() => handleSave({ ...notification, active: !active })}
          >
            {active ? 'Off' : 'On'}
          </MenuItem>
          <MenuItem onClick={() => handleEditNotification(notification)}>
            Edit
          </MenuItem>
          <MenuItem onClick={() => handleDelete(id)}>Delete</MenuItem>
        </Menu>
      </div>
    </NotificationList>
  );
}
