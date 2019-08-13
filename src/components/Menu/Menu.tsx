import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import styles from './Menu.module.scss';
import MenuItem from '../MenuItem/MenuItem';
import { ReactComponent as Intro } from './rocket.svg';
import { ReactComponent as Components } from './dashboard.svg';
import { ReactComponent as About } from './bookmark.svg';
import ComponentList from '../ComponentList/ComponentList';
import ComponentLink from '../ComponentLink/ComponentLink';
import WebComponents from '../WebComponents/WebComponents';

interface MenuProps {
  openable?: boolean;
}

const Menu: FunctionComponent<MenuProps> = ({ openable = false }) => {
  return (
    <div 
      className={classNames(
        styles.wrapper,
        openable && styles.openable
      )}
    >
      <ul className={styles.menu}>
        <MenuItem 
          label="Introduction"
          path="/"
          icon={<Intro />}
        />
        <MenuItem 
          label="Components"
          path="/components"
          icon={<Components />}
        >
          <WebComponents>
            <ComponentList title="Common">
              <ComponentLink 
                name="Avatar"
                path="avatar"
              />
            </ComponentList>
            <ComponentList title="Forms">
              <ComponentLink
                name="Button"
                path="button"
              />
              <ComponentLink
                name="Input"
                path="input"
              />
            </ComponentList>
            <ComponentList title="Structural">
              <ComponentLink 
                name="Form control"
                path="form-control"
              />
              <ComponentLink
                name="Form item"
                path="form-item"
              />
            </ComponentList>
          </WebComponents>
        </MenuItem>
        <MenuItem
          label="About"
          path="/about"
          icon={<About />}
        />
      </ul>
    </div>
  );
}

export default Menu;
