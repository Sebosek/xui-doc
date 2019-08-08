import React, { FunctionComponent } from 'react';
import styles from './Component.module.scss';

interface ComponentProps {
  name: String;
}

const Component: FunctionComponent<ComponentProps> = ({ name }) => {
  return (
    <li>
      <span className={styles.name}>{ name }</span>
    </li>
  )
}

export default Component;