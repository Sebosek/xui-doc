import React, { FunctionComponent } from 'react';
import styles from './HeroMenu.module.scss';

const HeroMenu: FunctionComponent = ({ children }) => (
  <div className={styles.hero}>
    {children}
  </div>
);

export default HeroMenu;