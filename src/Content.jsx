import React from 'react';
import styles from './Content.module.scss';

const Content = (props) => {
  return (
    <>
      <div className={styles.main}>
        <div>
          <img src={props.img} alt='img' />
        </div>
        <div className={styles.description_conteiner}>
          <div className={styles.description_head}>
            <span>{props.location}</span>
            <a href={props.mapUrl}>Viev on Google Map</a>
          </div>
          <div className={styles.description_body}>
            <h2>{props.title}</h2>
            <p className={styles.description_date}>
              {props.startDate}-{props.endDate}
            </p>
            <p className={styles.description}>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
