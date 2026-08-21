import React from 'react';

import Bookmark from '../img/bookmark.svg';
import Eraser from '../img/eraser.svg';
import Search from '../img/search.svg';
import Download from '../img/download.svg';
import Plus from '../img/plus.svg';
import Gear from '../img/gear.svg';
import styles from './Toolbar.module.scss';

export const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.group}>
        <button type="button" className={styles.filterButton}>
          Фильтр
        </button>
        <button type="button" className={styles.tintButton} aria-label="Сохранить фильтр">
          <Bookmark className={styles.tintIcon} />
        </button>
        <button type="button" className={styles.tintButton} aria-label="Сбросить фильтр">
          <Eraser className={styles.tintIcon} />
        </button>
        <button type="button" className={styles.tintButton} aria-label="Поиск">
          <Search className={styles.tintIcon} />
        </button>
      </div>

      <div className={styles.group}>
        <button type="button" className={styles.actionButton} data-tour="download-api">
          <Download className={styles.actionIcon} />
          Загрузить по API
        </button>
        <button type="button" className={styles.actionButton} data-tour="create-request">
          <Plus className={styles.actionIcon} />
          Заявка на поставку
        </button>
        <button type="button" className={styles.gearButton} aria-label="Настройки таблицы">
          <Gear className={styles.gearIcon} />
        </button>
      </div>
    </div>
  );
};
