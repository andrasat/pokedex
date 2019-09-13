import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { IProps, IState, TRouteParam } from './PokemonDetail';

declare const PokemonDetailPage: React.PureComponent<
  IProps & RouteComponentProps<TRouteParam>,
  IState
>;

export default PokemonDetailPage;
