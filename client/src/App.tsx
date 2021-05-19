import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";

import { persistor, store } from './components/store';
import { PersistGate } from 'redux-persist/integration/react';


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
import EditPhotoIndex from './components/EditPhoto';
import SharePhotoIndex from './components/SharePhoto';
import PageNotFound from './components/PageNotFound';




function App() {
  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <AuthRoute exact path="/create/style" component={EditPhotoIndex} />
            <AuthRoute exact path="/create/details" component={SharePhotoIndex} />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </AuthProvider>
        </BrowserRouter>
        
        </Root>
      </PersistGate>
    </Provider>
    
  );
}

export default App;
