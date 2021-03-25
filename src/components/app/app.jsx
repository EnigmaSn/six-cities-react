import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes } from '../../routes';

import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import FavoritesPage from "../favorites-page/favorites-page";
import RoomPage from "../room-page/room-page";
import ErrorPage from "../error/error";

const App = (props) => {

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path={Routes.MAIN} exact>
            <MainPage hotelsData={ props.hotelsData }/>
          </Route>
          <Route path={Routes.LOGIN} exact>
            <LoginPage />
          </Route>
          <Route path={Routes.FAVORITES} exact>
            <FavoritesPage />
          </Route>
          <Route path={Routes.HOTELS}>
            <RoomPage />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

App.propType = {
  hotelsData: PropTypes.arrayOf(PropTypes.object)
}

export default App;
