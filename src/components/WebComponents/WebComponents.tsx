import React, { FunctionComponent } from 'react';
import styles from './WebComponents.module.scss';

const Components: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.components}>
      { children }
    </div>
  );
}

export default Components;