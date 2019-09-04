import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.scss';

interface MenuItemProps {
  label: string;
  path: string;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ label, path, children }) => {
  return (
    <li className={styles.item}>
      <NavLink 
        className={styles.link}
        to={path}
        activeClassName={styles.active}
        exact
      >
        {label}
      </NavLink>
      {children && <div className={styles.children}>{children}</div>}
    </li>
  );
}

export default MenuItem;