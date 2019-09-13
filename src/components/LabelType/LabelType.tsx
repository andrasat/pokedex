import React from 'react';
import classNames from 'classnames';
import Alert from 'react-bootstrap/Alert';

import { AlertWrapper } from './LabelType.module.scss';

import { Helper } from '../../utils';
import { PokemonTypes } from '../../enums';

export interface IProps {
  pokemonType?: string;
  children?: React.ReactNode;
}

function LabelType({
  pokemonType,
  children
}: IProps): React.ReactElement<IProps> {
  const pokemonTypeClass = new Helper().getPokemonType(
    pokemonType as PokemonTypes
  );

  return (
    <Alert className={classNames(AlertWrapper, pokemonTypeClass)}>
      {children}
    </Alert>
  );
}

export default LabelType;
