import React, { useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import {
  projectsRequest,
  projectCloseModal,
  projectOpenModal,
} from 'store/modules/project/actions';
import Loading from 'components/Loading';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import IProject from 'Types/IProject';
import RoundButton from 'components/RoundButton';
import { useRouteMatch, useHistory } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Container } from './styles';
import ProjectForm from './ProjectForm';

export default function ProjectList() {
  const dispatch = useDispatch();

  const history = useHistory();

  const loading = useSelector<ArgosReduxStates, boolean>(
    (state) => state.project.loading
  );
  const projects = useSelector<ArgosReduxStates, IProject[]>(
    (state) => state.project.projects
  );

  const open = useSelector<ArgosReduxStates, boolean>(
    (state) => state.project.openModal
  );

  useEffect(() => {
    dispatch(projectsRequest());
  }, [dispatch]);

  function closeModal() {
    dispatch(projectCloseModal());
  }

  const { url } = useRouteMatch();

  return (
    <>
      <Container>
        <div>
          <RoundButton
            text="Add"
            Icon={MdAdd}
            color="#6081F5"
            onClick={() => dispatch(projectOpenModal())}
          />
        </div>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <Card>
                <CardActionArea
                  onClick={() => history.push(`${url}/${project.id}`)}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </li>
          ))}
        </ul>
      </Container>

      <Loading loading={loading} />

      <ProjectForm open={open} onClose={closeModal} />
    </>
  );
}
