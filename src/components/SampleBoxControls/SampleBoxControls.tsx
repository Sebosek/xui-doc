import React, { FunctionComponent } from 'react';
import styles from './SampleBoxControls.module.scss';

interface SampleBoxControlsProps {
  title: string;
}

const SampleBoxControls: FunctionComponent<SampleBoxControlsProps> = ({
  title,
  children,
}) => (
  <>
    <h3>{ title }</h3>
    <div className={styles.controls}>
      { children }
    </div>
  </>
);

export default SampleBoxControls;