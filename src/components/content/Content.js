import React from 'react';

import styles from './Content.module.css';

const Content = (props) => {
  return (
    <div className={styles.content}>
      {props.content}
    </div>
  );
};

export default Content;
