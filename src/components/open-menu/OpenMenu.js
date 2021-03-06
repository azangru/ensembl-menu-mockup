import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './OpenMenu.module.css';

const OpenMenu = (props) => {
  return (
    <div
      className={styles.menu}
      onMouseLeave={props.onLeave}
    >
      <Top {...props} />
      <Bottom {...props} />
    </div>
  );
};

const Top = (props) => {
  const { data, selectedItem, onHoverTop, onClick } = props;

  const handleHover = (item) => {
    onHoverTop(item);
  }

  const items = data.map((item) => {
    const classes = classNames(
      styles.menuItem,
      styles.topMenuItem,
      { [styles.topMenuItemActive]: item.name === selectedItem }
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
    <nav className={styles.menuTop}>
      { items }
    </nav>
  );
};

const Bottom = (props) => {
  const { data, hoveredItem } = props;
  const submenuData = data.find(item => item.name === hoveredItem);
  return (
    <div className={styles.menuBottom}>
      <Submenu
        parentName={submenuData.name}
        data={submenuData.getItems()}
        onClick={props.onClick}
      />
    </div>
  );
}

const Submenu = (props) => {
  const [submenuData, setSubmenuData] = useState(null);
  const [ hoveredItem, setHoveredItem ] = useState(null);
  const { data } = props;

  useEffect(() => {
    setSubmenuData(null);
    setHoveredItem(null);
  }, [props.parentName]);

  const handleMouseEnter = (item) => {
    setHoveredItem(item.name);

    if (item.getItems) {
      setSubmenuData(item.getItems());
    } else {
      setSubmenuData(null);
    }
  };

  const items = data.map(item => {
    const classes = classNames(
      { [styles.active]: hoveredItem && hoveredItem === item.name }
    );
    return (
      <li
        key={item.name}
        className={classes}
        onMouseEnter={() => handleMouseEnter(item)}
        onClick={() => props.onClick(item)}
      >
        <span>{item.name}</span>
        { item.getItems && <span><Chevron /></span> }
      </li>
    )
  });

  return (
    <>
      <ul>
        { items }
      </ul>
      { submenuData && <Submenu data={submenuData} onClick={props.onClick} /> }
    </>
  );
};

const Chevron = () => (
  <svg
	 viewBox="0 0 28 28">
    <polygon points="9,6.7 16.3,14 9,21.3 12.7,21.3 20,14 12.7,6.7 "/>
  </svg>
);

export default OpenMenu;
