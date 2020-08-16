import React from 'react';
import { MdDelete } from 'react-icons/md';

import RoundButton from 'components/RoundButton';
import { IMember } from 'Types/IProject';
import { ItemContainer } from './styles';

interface ItemProps {
  member: IMember;
  userId: number | undefined;
  handleDelete: (email: string) => void;
}

export default function Item({
  member: { email, userId: memberId },
  handleDelete,
  userId,
}: ItemProps) {
  return (
    <ItemContainer>
      <div>
        <span>{email}</span>
      </div>

      <div>
        {userId !== memberId && (
          <RoundButton
            text="Delete"
            onClick={() => handleDelete(email)}
            Icon={MdDelete}
            color="#C5474B"
          />
        )}
      </div>
    </ItemContainer>
  );
}
