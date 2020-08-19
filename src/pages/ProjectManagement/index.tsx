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
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  projectRequestOne,
  projectSuccessOne,
} from 'store/modules/project/actions';
import ProjectUsers from 'pages/ProjectUsers';
import EventTimeline from 'pages/EventTimeline';
import SlackIntegration from 'pages/Notifications/SlackIntegration';

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
      <PerfectScrollbar>
        <Switch>
          <Route component={Watchers} exact path={`${path}/watcher`} />
          <Route
            component={EventTimeline}
            exact
            path={`${path}/watcherTimeLine/:id`}
          />
          <Route component={ProjectUsers} exact path={`${path}/projectUsers`} />
          <Route
            component={SlackIntegration}
            exact
            path={`${path}/notification/slack`}
          />
          <Route
            component={SlackIntegration}
            exact
            path={`${path}/notification/slack/:notificationId`}
          />
          <Route
            component={Notifications}
            exact
            path={`${path}/notification`}
          />
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
      </PerfectScrollbar>
    </>
  );
};

export default ProjectManagement;
