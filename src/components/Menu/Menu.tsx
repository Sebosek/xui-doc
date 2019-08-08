import React, { FunctionComponent } from 'react';
import styles from './Menu.module.scss';
import MenuItem from '../MenuItem/MenuItem';
import { ReactComponent as Intro } from './rocket.svg';
import { ReactComponent as Components } from './dashboard.svg';
import { ReactComponent as About } from './bookmark.svg';
import ComponentList from '../ComponentList/ComponentList';
import Component from '../Component/Component';
import WebComponents from '../WebComponents/WebComponents';

const Menu: FunctionComponent = () => {
  return (
    <ul className={styles.menu}>
      <MenuItem 
        label="Introduction"
        icon={<Intro />}
      />
      <MenuItem 
        label="Components"
        icon={<Components />}
      >
        <WebComponents>
          <ComponentList title="Common">
            <Component name="Avatar" />
          </ComponentList>
          <ComponentList title="Forms">
            <Component name="Button" />
            <Component name="Input" />
          </ComponentList>
          <ComponentList title="Structural">
            <Component name="Form control" />
            <Component name="Form item" />
          </ComponentList>
        </WebComponents>
      </MenuItem>
      <MenuItem
        label="About"
        icon={<About />}
      />
    </ul>
  );
}

export default Menu;
