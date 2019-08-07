import React from 'react';
import './Menu.scss';
import MenuItem from '../MenuItem/MenuItem';

const Menu: React.FunctionComponent = () => {
  return (
    <ul className="menu">
      <MenuItem label="Introduction" />
      <MenuItem label="Components" />
      <MenuItem label="About" />
    </ul>
  );
}

export default Menu;
