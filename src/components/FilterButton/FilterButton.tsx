import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { PokemonTypes } from '../../enums';

function FilterButton(): React.ReactElement {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="filter-button">
        Filter By Types
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {Object.keys(PokemonTypes).map(each => (
          <Dropdown.Item key={each} href={`/?filter=${each}`}>
            {each}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterButton;
