import React, { FunctionComponent } from 'react';
import styles from './MenuItem.module.scss';
import { NavLink } from 'react-router-dom';

interface MenuProps {
  label: string;
  path: string;
  icon?: JSX.Element;
}

const MenuItem: FunctionComponent<MenuProps> = ({ label, path, icon, children }) => {
  return (
    <li className={styles.item}>
      <NavLink 
        to={path}
        activeClassName={styles.active}
        exact
      >
        {icon && <span className={styles.icon}>{ icon }</span>}
        <span className={styles.label}>{ label }</span>
      </NavLink>
      {/* <button>
        {icon && <span className={styles.icon}>{ icon }</span>}
        <span className={styles.label}>{ label }</span>
      </button> */}
      {children && <div className={styles.content}>{ children }</div>}
    </li>
  );
}

export default MenuItem;