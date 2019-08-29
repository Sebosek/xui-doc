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
                path="avatar"
              />
              <ComponentLink 
                name="Callout"
                path="callout"
              />
              <ComponentLink 
                name="Caption"
                path="caption"
              />
              <ComponentLink 
                name="Grid"
                path="grid"
              />
              <ComponentLink 
                name="Label"
                path="label"
              />
              <ComponentLink 
                name="Link"
                path="link"
              />
              <ComponentLink 
                name="Loading"
                path="loading"
              />
              <ComponentLink 
                name="Menu"
                path="menu"
              />
              <ComponentLink 
                name="Over element"
                path="over-element"
              />
              <ComponentLink 
                name="Popover"
                path="popover"
              />
              <ComponentLink 
                name="Tabs"
                path="tabs"
              />
              <ComponentLink 
                name="Title"
                path="title"
              />
              <ComponentLink 
                name="Tooltip"
                path="tooltip"
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