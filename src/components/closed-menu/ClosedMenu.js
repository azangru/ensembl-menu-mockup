import React from 'react';
import classNames from 'classnames';

import styles from './ClosedMenu.module.css';

const ClosedMenu = (props) => {
  const { data, selectedItem, onHover, onClick } = props;

  const handleHover = (item) => {
    onHover(item);
  }

  const items = data.map((item) => {
    const classes = classNames(
      styles.menuItem,
      { [styles.menuItemActive]: item.name === selectedItem }
    );
    return (
      <span
        key={item.name}
        className={classes}
        onMouseEnter={() => handleHover(item)}
        onClick={() => onClick(item)}
      >
        {item.name}
      </span>
    );
  });

  return (
    <nav className={styles.menu}>
      { items }
    </nav>
  );
};

export default ClosedMenu;
