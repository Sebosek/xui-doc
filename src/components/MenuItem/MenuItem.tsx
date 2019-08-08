import React, { FunctionComponent } from 'react';
import styles from './MenuItem.module.scss';
import { Link } from 'react-router-dom';

interface MenuProps {
  label: string;
  path: string;
  icon?: JSX.Element;
}

const MenuItem: FunctionComponent<MenuProps> = ({ label, path, icon, children }) => {
  return (
    <li className={styles.item}>
      <Link to={path}>
        {icon && <span className={styles.icon}>{ icon }</span>}
        <span className={styles.label}>{ label }</span>
      </Link>
      {/* <button>
        {icon && <span className={styles.icon}>{ icon }</span>}
        <span className={styles.label}>{ label }</span>
      </button> */}
      {children && <div className={styles.content}>{ children }</div>}
    </li>
  );
}

export default MenuItem;