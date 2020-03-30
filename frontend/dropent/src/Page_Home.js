import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as routes from './constants/routes';
import { firebase, auth } from './firebase';

const UnauthenticatedHomeContent = () => {
  return (
    <React.Fragment>
      <p>
        Welcome, please <Link to={routes.SIGN_IN_PATH}>sign in</Link>
      </p>
      <p>
        If you don't already have an account,{' '}
        <Link to={routes.SIGN_UP_PATH}>sign up</Link>
      </p>
    </React.Fragment>
  );
};

const AuthenticatedHomeContent = ({ authUser }) => {
  return (
    <p>
      Welcome back, {authUser.email}!
    </p>
  );
};

export {
  UnauthenticatedHomeContent,
  AuthenticatedHomeContent,
}
