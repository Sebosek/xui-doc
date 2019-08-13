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
        className={styles.link}
        to={path}
        activeClassName={styles.active}
        exact
      >
        {icon && (
          <xui-tooltip
            text={ label }
          >
            <span className={styles.icon}>{ icon }</span>
          </xui-tooltip>
        )}
        <span className={styles.label}>{ label }</span>
      </NavLink>
      {children && <div className={styles.content}>{ children }</div>}
    </li>
  );
}

export default MenuItem;