import React from 'react';

import ChevronDown from '../img/chevron-down.svg';
import Book from '../img/book.svg';
import Bell from '../img/bell.svg';
import Avatar from '../img/avatar.svg';
import styles from './UserPanel.module.scss';

export const UserPanel = () => {
  return (
    <div className={styles.panel}>
      <button type="button" className={styles.orgSelector}>
        <span className={styles.orgName}>ГК ТУЗЕМУН</span>
        <ChevronDown className={styles.chevron} />
      </button>

      <div className={styles.iconGroup}>
        <button type="button" className={styles.bookButton} aria-label="Справочник">
          <Book className={styles.bookIcon} />
        </button>

        <button type="button" className={styles.bellButton} aria-label="Уведомления">
          <Bell className={styles.bellIcon} />
        </button>

        <button type="button" className={styles.avatarButton} aria-label="Профиль">
          <Avatar className={styles.avatarCircle} />
        </button>
      </div>
    </div>
  );
};
