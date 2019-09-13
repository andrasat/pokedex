import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Client from '../../graphql/client';
import { IPokemon } from '../../interfaces/pokemon.interface';
import { Container, Card, Loader, Detail } from '../../components';

export interface IProps {}
export interface IState {
  pokemon: IPokemon | null;
  isLoading: boolean;
}

export type TRouteParam = { name: string };

class PokemonDetailPage extends React.PureComponent<
  IProps & RouteComponentProps<TRouteParam>,
  IState
> {
  request = new Client();

  constructor(props: IProps & RouteComponentProps<TRouteParam>) {
    super(props);
    this.state = {
      pokemon: null,
      isLoading: false
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    await this.fetchData(match.params.name);
  }

  async componentDidUpdate(
    prevProps: IProps & RouteComponentProps<TRouteParam>
  ) {
    const { match } = this.props;
    if (prevProps.match.params.name !== match.params.name) {
      await this.fetchData(match.params.name);
    }
  }

  private async fetchData(name: string) {
    this.setState({ isLoading: true });
    const { pokemon } = await this.request.getOnePokemonByName(name);
    this.setState({ pokemon, isLoading: false });
  }

  render() {
    const { pokemon, isLoading } = this.state;

    let render;

    if (isLoading) {
      render = <Loader />;
    } else if (!pokemon) {
      render = <p className="game-font">Pokemon not found...</p>;
    } else {
      render = (
        <Card
          titleText={pokemon.name}
          style={{ minHeight: '50%', width: '60%' }}
          imageSrc={pokemon.image}
        >
          <Detail pokemonData={pokemon} />
        </Card>
      );
    }

    return <Container>{render}</Container>;
  }
}

export default PokemonDetailPage;
