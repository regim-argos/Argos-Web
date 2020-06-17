import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import INotification from 'Types/INotification';

import { ItemList, HiddenInput, Container } from './styles';

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
    defaultItemValue.map(
      (notification) =>
        itemList.find(
          (selected) => selected.id === notification.id
        ) as INotification
    )
  );

  function selectItem(value: INotification[]) {
    if (value !== null) {
      setSelectedItems(value);
    }
  }

  return (
    <Container>
      <ItemList>
        {selectedItems.map((item, index) => (
          <HiddenInput
            key={item.id}
            name={`notifications[${index}].id`}
            defaultValue={item.id}
          />
        ))}
      </ItemList>
      <Autocomplete
        multiple
        onChange={(e, v) => {
          if (v) selectItem(v);
        }}
        value={selectedItems}
        options={itemList}
        getOptionLabel={(item) => item.name}
        renderInput={(params) => (
          <TextField {...params} label="Notifications" variant="outlined" />
        )}
      />
    </Container>
  );
}

export default NotificationAutocomplete;
