import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { IProps, IState } from './Landing';

declare const LandingPage: React.PureComponent<
  IProps & RouteComponentProps,
  IState
>;

export default LandingPage;
