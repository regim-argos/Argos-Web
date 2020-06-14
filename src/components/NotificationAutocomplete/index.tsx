import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { MdDelete } from 'react-icons/md';
import StyledButton from '../RoundButton';

import { ItemList, Item, HiddenInput, ButtonContainer } from './styles';

function NotificationAutocomplete({ itemList, initialData }) {
  const initialList = initialData.notifications
    ? initialData.notifications
    : [];

  const initialItemsList = initialList.map((d) => {
    const item = itemList.find((i) => i.id === d.id);
    return { name: item.name, id: item.id };
  });

  const [selectedItems, setSelectedItems] = useState(initialItemsList);

  const isEmpty = !(selectedItems.length > 0);

  function selectItem(value) {
    if (value === null) {
      return;
    }

    const itemSelected = selectedItems.find((item) => item.id === value.id);

    if (itemSelected) {
      return;
    }
    setSelectedItems([...selectedItems, { name: value.name, id: value.id }]);
  }

  function deleteItem(id) {
    setSelectedItems(selectedItems.filter((i) => i.id !== id));
  }

  return (
    <>
      <ItemList isEmpty={isEmpty}>
        {selectedItems.map((item, index) => (
          <Item key={item.id}>
            <span>{item.name}</span>
            <HiddenInput
              name={`notifications[${index}].id`}
              type="hidden"
              variant="outlined"
              value={item.id}
            />
            <ButtonContainer>
              <StyledButton
                Icon={MdDelete}
                color="#C5474B"
                onClick={() => deleteItem(item.id)}
              />
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
