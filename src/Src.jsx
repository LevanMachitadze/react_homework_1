import React from 'react';
import styles from './Src.module.scss';

const Src = (props) => {
  return (
    <>
      <div className={styles.main_div}>
        <div className={styles.SrcContent}>
          <p>{props.location}</p>
          <p>{props.imageUrl}</p>
        </div>
      </div>
    </>
  );
};
export default Src;
