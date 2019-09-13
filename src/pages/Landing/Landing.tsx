import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import InfiniteScroller from 'react-infinite-scroller';

import Client from '../../graphql/Client';
import { IPokemon } from '../../interfaces/pokemon.interface';
import { Card, Container, LabelType } from '../../components';

export interface IProps {}
export interface IState {
  pokemons: IPokemon[];
  hasMoreItems: boolean;
}

class LandingPage extends React.PureComponent<
  IProps & RouteComponentProps,
  IState
> {
  request = new Client();

  constructor(props: IProps & RouteComponentProps) {
    super(props);
    this.state = {
      pokemons: [],
      hasMoreItems: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  private async fetchData(page: number) {
    const { pokemons: pokemonState } = this.state;
    const first = (page + 1) * 10;
    const { pokemons } = await this.request.getPokemons(first);
    if (pokemons.length === pokemonState.length) {
      this.setState({ hasMoreItems: false });
    }
    this.setState({ pokemons });
  }

  render() {
    const { history } = this.props;
    const { pokemons, hasMoreItems } = this.state;

    const cards = pokemons.map(each => {
      return (
        <Card
          key={each.id}
          imageSrc={each.image}
          titleText={each.name}
          cardOnClickHandler={() => history.push(`/${each.name}`)}
          footer={each.types.map(type => (
            <LabelType key={`_${type}`} pokemonType={type}>
              <span className="game-font-white">{type}</span>
            </LabelType>
          ))}
        />
      );
    });

    return (
      <InfiniteScroller
        pageStart={0}
        loadMore={this.fetchData}
        hasMore={hasMoreItems}
        loader={
          <p key={0} style={{ textAlign: 'center' }} className="game-font">
            Loading...
          </p>
        }
      >
        <Container isOverflow>{cards}</Container>
      </InfiniteScroller>
    );
  }
}

export default LandingPage;
