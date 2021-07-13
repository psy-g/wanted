import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Nav from './containers/NavContainer';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import './App.css';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <Switch>
          <Route exact path="/" />
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default withRouter(App);
