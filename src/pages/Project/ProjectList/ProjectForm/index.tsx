import React from 'react';

import * as Yup from 'yup';

import { Button, Fade } from '@material-ui/core';
import Form from 'components/Form';
import { projectSaveRequest } from 'store/modules/project/actions';
import IProject from 'Types/IProject';
import { useDispatch } from 'react-redux';

import Input from 'components/Input';
import { ProjectFormModal } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().trim().required(),
});

interface ProjectFormProps {
  open: boolean;
  onClose: () => void;
}

export default function ProjectForm({ open, onClose }: ProjectFormProps) {
  const dispatch = useDispatch();

  return (
    <ProjectFormModal open={open} onClose={onClose}>
      <Fade in={open}>
        <div id="projectForm">
          <Form
            schema={schema}
            submitFunction={(data: IProject) => {
              dispatch(projectSaveRequest(data));
            }}
          >
            <Input name="id" type="hidden" variant="outlined" />
            <Input name="name" type="text" label="Name" variant="outlined" />
            <Button variant="contained" type="submit" color="primary">
              Save
            </Button>
          </Form>
        </div>
      </Fade>
    </ProjectFormModal>
  );
}
