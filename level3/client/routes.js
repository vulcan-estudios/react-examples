// Se definen las rutas de la aplicación de manera declarativa como componentes.
// A su vez se aceptan hijos dentro de las rutas para pasarse cuando las rutas
// son cumplidas. Además de poder pasar parámetros.

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './containers/App';
import List from './containers/List';
import Item from './containers/Item';
import Winners from './containers/Winners';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={List} />
    <Route path='/item/:itemId' component={Item} />
    <Route path='/winners' component={Winners} />
    <Redirect from='*' to='/' />
  </Route>
);
