import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import { LandingPage } from '../../pages';
import { AppWrapper, AppContent } from './App.module.scss';

export interface IProps {}

const App: React.FC<IProps> = () => (
  <div className={AppWrapper}>
    <Header />

    <div className={AppContent}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/:name" />
      </Switch>
    </div>
  </div>
);

export default App;
