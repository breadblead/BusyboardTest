import React from 'react';

import Logo from '../img/logo.svg';
import { FavoriteButton } from './FavoriteButton';
import { HeaderTabs } from './HeaderTabs';
import { UserPanel } from './UserPanel';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftZone}>
        <Logo className={styles.logo} />
        <nav className={styles.nav}>
          <FavoriteButton />
          <HeaderTabs />
        </nav>
      </div>

      <UserPanel />
    </header>
  );
};
