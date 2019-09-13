import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import { AttackTable } from './Detail.module.scss';

import { IPokemon } from '../../interfaces/pokemon.interface';
import Card from '../Card';
import LabelType from '../LabelType';
import RowDetail from './_RowDetail';
import TRowAttackData from './_TRowAttackData';

export interface IProps {
  pokemonData: IPokemon;
}

function Detail({
  pokemonData,
  history
}: IProps & RouteComponentProps): React.ReactElement {
  return (
    <Container className="game-font">
      {Object.keys(pokemonData).reduce<React.ReactNode[]>(
        (curr, next: string) => {
          if (next === 'number') {
            curr.push(
              <RowDetail key={next} title="Pokedex entry: ">
                {pokemonData.number} - {pokemonData.name}
              </RowDetail>
            );
          }

          if (next === 'types') {
            curr.push(
              <RowDetail key={next} title="Types: ">
                {pokemonData.types.map(type => (
                  <LabelType
                    key={`${pokemonData.id}_${type}`}
                    pokemonType={type}
                  >
                    <span className="game-font-white">{type}</span>
                  </LabelType>
                ))}
              </RowDetail>
            );
          }

          if (next === 'maxHP') {
            curr.push(
              <RowDetail key={next} title="Max HP: ">
                {pokemonData.maxHP}
              </RowDetail>
            );
          }

          if (next === 'maxCP') {
            curr.push(
              <RowDetail key={next} title="Max CP: ">
                {pokemonData.maxCP}
              </RowDetail>
            );
          }

          if (next === 'weight') {
            curr.push(
              <RowDetail key={next} title="Weight: ">
                {pokemonData.weight.minimum} - {pokemonData.weight.maximum}
              </RowDetail>
            );
          }

          if (next === 'height') {
            curr.push(
              <RowDetail key={next} title="Height: ">
                {pokemonData.height.minimum} - {pokemonData.height.maximum}
              </RowDetail>
            );
          }

          if (next === 'classification') {
            curr.push(
              <RowDetail key={next} title="Classification: ">
                {pokemonData.classification}
              </RowDetail>
            );
          }

          if (next === 'resistant' && pokemonData.resistant) {
            curr.push(
              <RowDetail key={next} title="Resistant: ">
                {pokemonData.resistant.map(type => (
                  <LabelType
                    key={`${pokemonData.id}_${type}`}
                    pokemonType={type}
                  >
                    <span className="game-font-white">{type}</span>
                  </LabelType>
                ))}
              </RowDetail>
            );
          }

          if (next === 'weaknesses' && pokemonData.weaknesses) {
            curr.push(
              <RowDetail key={next} title="Weakness: ">
                {pokemonData.weaknesses.map(type => (
                  <LabelType
                    key={`${pokemonData.id}_${type}`}
                    pokemonType={type}
                  >
                    <span className="game-font-white">{type}</span>
                  </LabelType>
                ))}
              </RowDetail>
            );
          }

          if (next === 'attacks' && pokemonData.attacks) {
            curr.push(
              <RowDetail key={next} title="Attacks: ">
                <Table className={AttackTable}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Damage</th>
                      <th>type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pokemonData.attacks.fast &&
                      pokemonData.attacks.fast.map(each => (
                        <TRowAttackData
                          key={`${pokemonData.id}_${each.name}`}
                          name={each.name}
                          damage={each.damage}
                          type={each.type}
                        />
                      ))}
                    {pokemonData.attacks.special &&
                      pokemonData.attacks.special.map(each => (
                        <TRowAttackData
                          key={`${pokemonData.id}_${each.name}`}
                          name={each.name}
                          damage={each.damage}
                          type={each.type}
                        />
                      ))}
                  </tbody>
                </Table>
              </RowDetail>
            );
          }

          if (next === 'evolutions' && pokemonData.evolutions)
            curr.push(
              <RowDetail key={next} title="Evolutions: ">
                {pokemonData.evolutions.map(each => (
                  <Card
                    key={`${pokemonData.id}_${each.name}`}
                    style={{ width: 250 }}
                    titleText={each.name}
                    imageSrc={each.image}
                    cardOnClickHandler={() => history.push(`/${each.name}`)}
                  />
                ))}
              </RowDetail>
            );

          return curr;
        },
        []
      )}
    </Container>
  );
}

export default withRouter(Detail);
