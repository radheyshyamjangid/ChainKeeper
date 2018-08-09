import React, { Component } from 'react';
import { BrowserRouter as Router,Route, } from 'react-router-dom';
import './App.css';

import * as routes from '../constants/routes';
import Setup from './Setup';
import MainPage from './Home';
import SignInPage from './SignIn';
import LoginwithGoogle from "./LoginwithGoogle";
import PasswordForgetPage from './PasswordForget';
import SignUpPage from './SignUp';
import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <div>
      <Route
        exact path={routes.LANDING}
        component={() => <Setup />}
      />

      <Route
        exact path={routes.HOME}
        component={() => <MainPage />}
      />

       <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />

      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage />}
      />

      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />

      <Route
        exact path={routes.GOOGLE_LOGIN}
        component={() => <LoginwithGoogle />}
      />
    </div>
  </Router>

export default  withAuthentication(App);
