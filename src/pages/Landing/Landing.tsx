import React from 'react';
import qs from 'qs';
import { RouteComponentProps } from 'react-router-dom';
import InfiniteScroller from 'react-infinite-scroller';

import Client from '../../graphql/client';
import { IPokemon } from '../../interfaces/pokemon.interface';
import { Card, Container, LabelType, Loader } from '../../components';

export interface IProps {}
export interface IState {
  pokemons: IPokemon[];
  hasMoreItems: boolean;
  fetchCount: number;
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
      hasMoreItems: true,
      fetchCount: 0
    };
    this.fetchData = this.fetchData.bind(this);
  }

  private async fetchData(page: number) {
    const { location } = this.props;
    const { pokemons: pokemonState, fetchCount } = this.state;

    const first = (page + 1) * 10;

    const { pokemons } = await this.request.getPokemons(first);
    this.setState(prev => ({ fetchCount: prev.fetchCount + 1 }));

    if (pokemons.length === pokemonState.length) {
      this.setState({ hasMoreItems: false });
    }

    const query = qs.parse(location.search.replace(/\?/g, ''));
    const filteredPokemon = pokemons.filter(each => {
      let checkFilter = true;
      let checkName = true;

      if (query.filter) {
        checkFilter = each.types.includes(query.filter);
      }
      if (query.name) {
        checkName = new RegExp(`/${query.name}/`, 'gi').test(each.name);
      }

      return checkFilter && checkName;
    });

    if (filteredPokemon.length === pokemonState.length && fetchCount > 7) {
      this.setState({ hasMoreItems: false, fetchCount: 0 });
    }

    this.setState({ pokemons: filteredPokemon });
  }

  render() {
    const { history } = this.props;
    const { pokemons, hasMoreItems } = this.state;

    const cards = pokemons.map(each => {
      return (
        <Card
          style={{ width: 300, minHeight: 360 }}
          key={each.id}
          imageSrc={each.image}
          titleText={each.name}
          cardOnClickHandler={() => history.push(`/${each.name}`)}
          footer={each.types.map(type => (
            <LabelType key={`_${each.id}_${type}`} pokemonType={type}>
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
        loader={<Loader key={0} />}
      >
        <Container isOverflow>
          {pokemons.length > 0 || hasMoreItems ? (
            cards
          ) : (
            <p className="game-font">Pokemon not found...</p>
          )}
        </Container>
      </InfiniteScroller>
    );
  }
}

export default LandingPage;
