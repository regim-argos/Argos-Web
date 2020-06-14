import React from 'react';
import { Route, Redirect, useRouteMatch, Switch } from 'react-router-dom';
import Watchers from 'pages/Watchers';
import Notifications from 'pages/Notifications';
import NavigationMenu from 'components/NavigationMenu';

// import { Container } from './styles';

const ProjectManagement: React.FC = () => {
  const { path, url } = useRouteMatch();
  console.log(path, url);

  return (
    <>
      <NavigationMenu />
      <Switch>
        <Route component={Watchers} exact path={`${path}/watcher`} />
        <Route component={Notifications} exact path={`${path}/notification`} />
        <Route
          component={() => <Redirect to={`${url}/watcher`} />}
          exact
          path={`${path}/`}
        />
        <Route
          path={`${path}/*`}
          component={() => <Redirect to={`${url}/watcher`} />}
        />
      </Switch>
    </>
  );
};

export default ProjectManagement;
