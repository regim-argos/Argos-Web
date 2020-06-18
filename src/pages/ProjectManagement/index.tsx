import React, { useEffect } from 'react';
import {
  Route,
  Redirect,
  useRouteMatch,
  Switch,
  useParams,
} from 'react-router-dom';
import Watchers from 'pages/Watchers';
import Notifications from 'pages/Notifications';
import NavigationMenu from 'components/NavigationMenu';
import { useDispatch } from 'react-redux';
import {
  projectRequestOne,
  projectSuccessOne,
} from 'store/modules/project/actions';
import ProjectUsers from 'pages/ProjectUsers';

// import { Container } from './styles';

const ProjectManagement: React.FC = () => {
  const { path, url } = useRouteMatch();
  const { projectId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectRequestOne(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {
    return () => {
      dispatch(projectSuccessOne(undefined));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavigationMenu />
      <Switch>
        <Route component={Watchers} exact path={`${path}/watcher`} />
        <Route component={ProjectUsers} exact path={`${path}/projectUsers`} />
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
