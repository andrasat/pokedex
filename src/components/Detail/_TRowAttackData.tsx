import React from 'react';

import { IAttack } from '../../interfaces/attack.interface';
import LabelType from '../LabelType';

interface IProps extends IAttack {}

function TRowAttackData({ name, damage, type }: IProps): React.ReactElement {
  return (
    <tr>
      <td>{name}</td>
      <td>{damage}</td>
      <td>
        <LabelType pokemonType={type}>
          <span className="game-font-white">{type}</span>
        </LabelType>
      </td>
    </tr>
  );
}

export default TRowAttackData;
