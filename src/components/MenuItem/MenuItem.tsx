import React from 'react';
import './MenuItem.scss';

interface MenuDeclaration {
  label: String;
}

const MenuItem: React.FunctionComponent<MenuDeclaration> = (dec: MenuDeclaration) => {
  return (
    <li className="item">
      <a href="#">{dec.label}</a>
    </li>
  );
}

export default MenuItem;