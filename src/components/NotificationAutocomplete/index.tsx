import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { MdClose } from 'react-icons/md';
import INotification from 'Types/INotification';
import StyledButton from '../RoundButton';

import { ItemList, Item, HiddenInput, ButtonContainer } from './styles';

interface Items {
  itemName: string;
  id: number;
}
function NotificationAutocomplete({
  itemList,
  defaultItemValue = [],
}: {
  itemList: INotification[];
  defaultItemValue: INotification[];
}) {
  const [selectedItems, setSelectedItems] = useState<INotification[]>(
    defaultItemValue
  );

  function selectItem(value: INotification) {
    if (value !== null) {
      setSelectedItems([...selectedItems, value]);
    }
  }
  const handleDeleteItem = (id: number) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <ItemList>
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
                Icon={MdClose}
                color="#C5474B"
                onClick={() => handleDeleteItem(item.id)}
              />
            </ButtonContainer>
          </Item>
        ))}
      </ItemList>
      <Autocomplete
        onChange={(e, v) => {
          if (v) selectItem(v);
        }}
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
