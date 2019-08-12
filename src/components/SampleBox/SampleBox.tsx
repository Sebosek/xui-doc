import React, { FunctionComponent } from 'react';
import styles from './SampleBox.module.scss';

const SampleBox: FunctionComponent = ({ children }) => (
  <div className={styles.sample}>
    { children }
  </div>
);

export default SampleBox;