import React, { FunctionComponent } from 'react';
import styles from './ComponentList.module.scss';

interface ComponentListProps {
  title: String;
}

const ComponentList: FunctionComponent<ComponentListProps> = ({ title, children }) => {
  return (
    <div className={styles.column}>
      <h3>{ title }</h3>
      <ul>
        { children }
      </ul>
    </div>
  );
}

export default ComponentList;