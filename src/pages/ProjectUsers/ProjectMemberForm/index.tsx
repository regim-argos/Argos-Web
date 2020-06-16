import React from 'react';

import * as Yup from 'yup';

import { Button, Fade } from '@material-ui/core';
import Form from 'components/Form';
import { useDispatch } from 'react-redux';

import Input from 'components/Input';
import { memberSaveRequest } from 'store/modules/project/actions';
import { useParams } from 'react-router-dom';
import { MemberFormModal } from './styles';

const schema = Yup.object().shape({
  email: Yup.string().trim().email().required(),
});

interface MemberFormProps {
  open: boolean;
  onClose: () => void;
}

export default function MemberForm({ open, onClose }: MemberFormProps) {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  return (
    <MemberFormModal open={open} onClose={onClose}>
      <Fade in={open}>
        <div id="memberForm">
          <Form
            schema={schema}
            submitFunction={(data: { email: string }) => {
              dispatch(memberSaveRequest(data.email, projectId));
            }}
          >
            <Input name="email" type="text" label="Email" variant="outlined" />
            <Button type="submit" color="primary">
              Save
            </Button>
          </Form>
        </div>
      </Fade>
    </MemberFormModal>
  );
}
