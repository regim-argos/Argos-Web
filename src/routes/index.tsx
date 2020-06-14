import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Watchers from 'pages/Watchers';
import Notifications from 'pages/Notifications';
import Route from './Route';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact Component={SignIn} />
      <Route path="/register" Component={SignUp} />
      <Route path="/watchers" exact Component={Watchers} isPrivate />
      <Route path="/notifications" exact Component={Notifications} isPrivate />
      <Route path="/*" Component={() => <Redirect to="/" />} />
    </Switch>
  );
}
