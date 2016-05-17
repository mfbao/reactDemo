import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Oem from './components/Oem';
import DQ from './components/DQ';
import Bank from './components/Bank';


export default (
  <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/oem' component={Oem} />
      <Route path='/dq' component={DQ} />
      <Route path='/bank' component={Bank} />
  </Route>
);