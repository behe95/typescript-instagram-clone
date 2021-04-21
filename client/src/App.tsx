import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';

import { BrowserRouter, Switch, Route } from "react-router-dom";


import Root from "./components/Root";
import Start from "./components/Start";
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import AuthRoute from './components/AuthRoute';
import { AuthProvider } from './contexts/Auth.context';
import EditProfile from './components/EditProfile';


function App() {
  return (
    
    <Root>
      <BrowserRouter>
      <AuthProvider>
      <Switch>
          <Route exact path="/" component={Start} />
          <AuthRoute exact path="/home" component={Home} />
          <AuthRoute exact path="/explore" component={Search} />
          <AuthRoute exact path="/:userId" component={Profile} />
          <Route exact path="/accounts/emailsignup" component={Signup} />
          <Route exact path="/accounts/password/reset" component={ForgotPassword} />
          <AuthRoute exact path="/accounts/edit" component={EditProfile} />
        </Switch>
      </AuthProvider>
      </BrowserRouter>
      
    </Root>
  );
}

export default App;
