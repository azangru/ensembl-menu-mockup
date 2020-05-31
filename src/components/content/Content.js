import React from 'react';

import styles from './Content.module.css';

const Content = (props) => {
  return (
    <div className={styles.content}>
      Content for {props.content}
    </div>
  );
};

export default Content;
