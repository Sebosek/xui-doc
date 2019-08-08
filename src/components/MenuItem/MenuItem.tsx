import React, { FunctionComponent } from 'react';
import styles from './MenuItem.module.scss';

interface MenuProps {
  label: String;
  icon?: JSX.Element;
}

const MenuItem: FunctionComponent<MenuProps> = ({ label, icon, children }) => {
  return (
    <li className={styles.item}>
      <button>
        {icon && <span className={styles.icon}>{ icon }</span>}
        <span className={styles.label}>{ label }</span>
      </button>
      {children && <div className={styles.content}>{ children }</div>}
    </li>
  );
}

export default MenuItem;