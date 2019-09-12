import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import Pokeball from '../../assets/images/pokeball.png';

import { HeaderWrapper } from './Header.module.scss';

const Header: React.FC = () => (
  <Navbar bg="light" expand="sm" className={HeaderWrapper}>
    <Navbar.Brand href="/">
      <h5>
        <Image src={Pokeball} height={25} width={25} rounded /> Pok&eacute;dex
      </h5>
    </Navbar.Brand>
  </Navbar>
);

export default Header;
