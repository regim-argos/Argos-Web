import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { MdDelete } from 'react-icons/md';
import StyledButton from '../RoundButton';

import { ItemList, Item, HiddenInput, ButtonContainer } from './styles';

function NotificationAutocomplete({ itemList, name, path, ...rest }) {
  const [selectedItems, setSelectedItems] = useState([]);

  async function selectItem(value) {
    if (value !== null) {
      await setSelectedItems([
        ...selectedItems,
        { itemName: value.name, id: value.id },
      ]);
    }
  }

  return (
    <>
      <ItemList>
        {selectedItems.map((item, index) => (
          <Item key={item.id}>
            <span>{item.itemName}</span>
            <HiddenInput
              name={`notifications[${index}].id`}
              type="hidden"
              variant="outlined"
              value={item.id}
            />
            <ButtonContainer>
              <StyledButton Icon={MdDelete} color="#C5474B" />
            </ButtonContainer>
          </Item>
        ))}
      </ItemList>
      <Autocomplete
        label="Notification"
        onChange={(e, v) => selectItem(v)}
        options={itemList}
        getOptionLabel={(item) => item.name}
        renderInput={(params) => (
          <TextField {...params} label="Notifications" variant="outlined" />
        )}
      />
    </>
  );
}

export default NotificationAutocomplete;