import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as routes from './constants/routes';
import { firebase, auth } from './firebase';

class SignOut extends React.Component {
  signOut = e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    return auth
      .doSignOut()
      .then(response => {
        console.log('successfully signed out', response);
      })
      .catch(err => {
        console.log('failed to sign out', err);
      });
  };

  componentDidMount() {
    this.signOut();
  }

  render() {
    return <Redirect to={routes.HOME_PATH} />;
  }
}

export default SignOut;
