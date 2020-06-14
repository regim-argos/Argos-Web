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
import { Link, useRouteMatch } from 'react-router-dom';
import { Container } from './styles';
import ProjectForm from './ProjectForm';

export default function ProjectList() {
  const dispatch = useDispatch();

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
            Icon={MdAdd}
            color="#6081F5"
            onClick={() => dispatch(projectOpenModal())}
          />
        </div>
        <ul>
          {projects.map((project) => (
            <Link to={`${url}/${project.id}`}>
              <h1>{project.name}</h1>
            </Link>
            // <ProjectList
            //   key={project.id}
            //   project={project}
            //   handleSave={handleSave}
            // />
          ))}
        </ul>
      </Container>

      <Loading loading={loading} />

      <ProjectForm open={open} onClose={closeModal} />
    </>
  );
}
