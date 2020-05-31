import React, { useState } from 'react';

import ClosedMenu from './components/closed-menu/ClosedMenu';
import OpenMenu from './components/open-menu/OpenMenu';
import Content from './components/content/Content';

import data from './data/menuData';

import './App.css';

function App() {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [selectedTopMenuItem, setSelectedTopMenuItem] = useState(data[0].name);
  const [hoveredTopMenuItem, setHoveredTopMenuItem] = useState(data[0].name);
  const [content, setContent] = useState(data[0].name);
  
  const onClosedMenuHover = (item) => {
    setHoveredTopMenuItem(item.name);
    if (item.getItems) {
      setIsShowingMenu(true);
    } else {
      setIsShowingMenu(false);
    }
  };

  const onClick = (item) => {
    setIsShowingMenu(false);
    setContent(item.name);
    const selectedTopMenuItem = data.find(topItem => searchRecursively(topItem, item.name));
    setSelectedTopMenuItem(selectedTopMenuItem.name);
  };

  const closedMenu = (
    <ClosedMenu
      data={data}
      selectedItem={selectedTopMenuItem}
      onHover={onClosedMenuHover}
      onClick={onClick}
    />
  );

  const openMenu = (
    <OpenMenu
      data={data}
      selectedItem={selectedTopMenuItem}
      hoveredItem={hoveredTopMenuItem}
      onHoverTop={onClosedMenuHover}
      onClick={onClick}
    />
  );

  return (
    <div className="App">
      { !isShowingMenu
        ? closedMenu
        : openMenu
      }
      <Content content={content} />
      { isShowingMenu && <div className="shadow-overlay" /> }
    </div>
  );
}

const searchRecursively = (item, name) => {
  if (item.name === name) {
    return true;
  } else if (!item.getItems) {
    return false;
  } else {
    return item.getItems().some(item => searchRecursively(item, name));
  }
};


export default App;
