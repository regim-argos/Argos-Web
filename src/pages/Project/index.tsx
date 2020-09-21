import React from 'react';
import Navbar from 'components/Navbar';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import ProjectManagement from 'pages/ProjectManagement';
import { Container, Box } from './styles';
import ProjectList from './ProjectList';

const Project: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Container id="Container">
      <Box>
        <Navbar />
        <Switch>
          <Route exact path={path}>
            <ProjectList />
          </Route>
          <Route path={`${path}/:projectId`}>
            <ProjectManagement />
          </Route>
        </Switch>
      </Box>
    </Container>
  );
};

export default Project;
