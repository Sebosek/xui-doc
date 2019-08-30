import React, { FunctionComponent } from 'react';
import styles from './Menu.module.scss';
import MenuItem from '../HorizontalMenuItem/MenuItem';
import ComponentList from '../ComponentList/ComponentList';
import ComponentLink from '../ComponentLink/ComponentLink';
import HeroMenu from '../HeroMenu/HeroMenu';

const Menu: FunctionComponent = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <MenuItem 
          label="Introduction"
          path="/"
        />
        <MenuItem 
          label="Components"
          path="/components"
        >
          <HeroMenu>
            <ComponentList title="Common">
              <ComponentLink 
                name="Avatar"
              />
              <ComponentLink 
                name="Callout"
              />
              <ComponentLink 
                name="Caption"
              />
              <ComponentLink 
                name="Grid"
              />
              <ComponentLink 
                name="Label"
              />
              <ComponentLink 
                name="Link"
              />
              <ComponentLink 
                name="Loading"
              />
              <ComponentLink 
                name="Menu"
              />
              <ComponentLink 
                name="Over element"
                path="OverElement"
              />
              <ComponentLink 
                name="Popover"
              />
              <ComponentLink 
                name="Tabs"
              />
              <ComponentLink 
                name="Title"
              />
              <ComponentLink 
                name="Tooltip"
              />
            </ComponentList>
            <ComponentList title="Forms">
              <ComponentLink
                name="Button"
                path="button"
              />
              <ComponentLink 
                name="Checkbox"
                path="checkbox"
              />
              <ComponentLink
                name="Input"
                path="input"
              />
              <ComponentLink 
                name="Password"
                path="password"
              />
              <ComponentLink 
                name="Radio"
                path="radio"
              />
              <ComponentLink 
                name="Toggle"
                path="toggle"
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
          </HeroMenu>
        </MenuItem>
        <MenuItem
          label="About"
          path="/about"
        />
      </ul>
    </nav>
  );
}

export default Menu;