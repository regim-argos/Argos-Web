import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';
import Watchers from '~/pages/Watchers';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/watchers" exact component={Watchers} isPrivate />
      <Route path="/*" component={() => <Redirect to="/" />} />
    </Switch>
  );
}
