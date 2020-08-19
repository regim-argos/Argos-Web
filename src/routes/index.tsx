import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Project from 'pages/Project';
import ConfirmEmail from 'pages/ConfirmEmail';
import ForgetPasswordForm from 'pages/ForgetPassword';
import ForgetPasswordRequest from 'pages/ForgetPasswordRequest';
import Route from './Route';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact Component={SignIn} />
      <Route path="/register" Component={SignUp} />
      <Route path="/forgetPasswordRequest" Component={ForgetPasswordRequest} />
      <Route path="/forgetPassword/:hash" Component={ForgetPasswordForm} />
      <Route path="/confirmEmail/:hash" isBoth Component={ConfirmEmail} />
      <Route path="/project" isPrivate Component={Project} />
      <Route path="/*" Component={() => <Redirect to="/" />} />
    </Switch>
  );
}
