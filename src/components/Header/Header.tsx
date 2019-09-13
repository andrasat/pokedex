import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import Pokeball from '../../assets/images/pokeball.png';
import { HeaderWrapper } from './Header.module.scss';

import FilterButton from '../FilterButton';

export interface IProps {}

function Header({
  location
}: IProps & RouteComponentProps<any>): React.ReactElement {
  return (
    <Navbar bg="light" expand="sm" className={HeaderWrapper}>
      <Navbar.Brand href="/" className="mr-auto">
        <h5>
          <Image src={Pokeball} height={25} width={25} rounded /> Pok&eacute;dex
        </h5>
      </Navbar.Brand>

      {location.pathname === '/' && (
        <Form inline className="mr-2">
          <FilterButton />
        </Form>
      )}
    </Navbar>
  );
}

export default withRouter(Header);
