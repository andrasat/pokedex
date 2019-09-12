import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import { LandingPage } from '../../pages';
import { AppWrapper, AppContent } from './App.module.scss';

const App: React.FC = () => (
  <div className={AppWrapper}>
    <Header />

    <div className={AppContent}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  </div>
);

export default App;
