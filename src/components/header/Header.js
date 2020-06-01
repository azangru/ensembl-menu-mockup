import React from 'react';

import { ReactComponent as Home } from './images/home.svg';
import { ReactComponent as Search } from './images/search.svg';
import { ReactComponent as SpeciesSelector } from './images/species-selector.svg';
import { ReactComponent as GenomeBrowser } from './images/browser.svg';
import { ReactComponent as EntityViewer } from './images/entity-viewer.svg';
import { ReactComponent as CustomDownload } from './images/custom-download.svg';
import { ReactComponent as Help } from './images/help.svg';

import styles from './Header.module.css';

const Header = () => {

  return (
    <div>
      <Top />
      <LaunchBar />
    </div>
  );

};

const Top = () => {
  return (
    <div className={styles.top}>
      <Home />
      <span className={styles.topName}>Ensembl</span>
    </div>
  );
};

const LaunchBar = () => {
  return (
    <div className={styles.launchBar}>
      <div className={styles.launchBarSlot}>
        <Search />
        <SpeciesSelector />
      </div>
      <div className={styles.launchBarSlot}>
        <GenomeBrowser />
      </div>
      <div className={styles.launchBarSlot}>
        <EntityViewer />
      </div>
      <div className={styles.launchBarSlot}>
        <CustomDownload />
      </div>
      <div className={styles.launchBarSlot}>
        <Help />
      </div>
    </div>
  );
};


export default Header;
