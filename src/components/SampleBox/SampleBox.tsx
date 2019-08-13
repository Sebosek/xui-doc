import React, { FunctionComponent, useState } from 'react';
import styles from './SampleBox.module.scss';

interface SampleBoxProps {
  controls: JSX.Element[];
}

const SampleBox: FunctionComponent<SampleBoxProps> = ({ controls, children }) => {
  const [ shown, setShown ] = useState(false);

  const label = () => shown ? 'hide controls' : 'show controls';

  return (
    <div className={styles.box}>
      <div className={styles.sample}>
        { children }
      </div>
      <div
        className={styles.control}
        onClick={ () => setShown(!shown) }
      >{ label() }</div>
      {shown && (
        <div className={styles.columns}>
          {controls && controls.map((control, i) => 
            <div
              className={styles.column}
              key={`${control.type}-${i}`}
            >
              { control }
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SampleBox;