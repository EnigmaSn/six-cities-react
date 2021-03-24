import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Card from "../card/card";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import Error from "../error/error";

const App = (props) => {

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Main hotelsData={ props.hotelsData }/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/offer/:id">
            <Room />
          </Route>
          <Route>
            <Error />
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
