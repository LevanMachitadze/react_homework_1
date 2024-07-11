import React from 'react';
import Src from './Src';
import Content from './Content';
import myData from './data.js';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <div className={styles.head_left}>
          <h2>Photos from Unsplash</h2>
          <p>(can use these URLs as your img src)</p>
        </div>
        <div className={styles.head_right}>
          <img src='' alt='' />
          <h3>my travel journal.</h3>
        </div>
      </div>
      {myData.map((local) => {
        const myKey = `${local.location} - ${local.imageUrl} - ${local.description}`;
        return (
          <div className={styles.container} key={myKey}>
            <Src location={local.location} imageUrl={local.imageUrl} />

            <Content
              img={local.imageUrl}
              title={local.title}
              location={local.location}
              mapUrl={local.googleMapsUrl}
              startDate={local.startDate}
              endDate={local.endDate}
              description={local.description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
