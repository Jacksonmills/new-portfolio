import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Work from '../../pages/Work';
import Contact from '../../pages/Contact';
import Error from '../../pages/Error';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/work' component={Work} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
