import React from 'react';
import { MdDelete } from 'react-icons/md';

import RoundButton from 'components/RoundButton';
import { IMember } from 'Types/IProject';
import { ItemContainer } from './styles';

interface ItemProps {
  member: IMember;
  handleDelete: (email: string) => void;
}

export default function Item({ member: { email }, handleDelete }: ItemProps) {
  return (
    <ItemContainer>
      <div>
        <span>{email}</span>
      </div>

      <div>
        <RoundButton
          text="Delete"
          onClick={() => handleDelete(email)}
          Icon={MdDelete}
          color="#C5474B"
        />
      </div>
    </ItemContainer>
  );
}
