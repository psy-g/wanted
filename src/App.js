import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import Nav from './containers/NavContainer';
import './App.css';

const App = () => {
  return (
    <>
      <Nav />
      <Switch></Switch>
    </>
  );
};

export default withRouter(App);
