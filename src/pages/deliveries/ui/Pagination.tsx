import React from 'react';
import classNames from 'classnames';

import Chevron from '../img/chevron.svg';
import styles from './Pagination.module.scss';

const PAGES = [1, 2, 3, 4, 5];
const ACTIVE_PAGE = 1;

export const Pagination = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollThumb} />

      <div className={styles.controls}>
        <button type="button" className={styles.arrowButton} aria-label="Предыдущая страница" disabled>
          <Chevron className={classNames(styles.arrowIcon, styles.prevIcon)} />
        </button>

        <div className={styles.pages}>
          {PAGES.map((page) => (
            <button
              key={page}
              type="button"
              className={classNames(styles.pageButton, { [styles.pageButtonActive]: page === ACTIVE_PAGE })}
            >
              {page}
            </button>
          ))}
        </div>

        <button type="button" className={styles.arrowButton} aria-label="Следующая страница">
          <Chevron className={classNames(styles.arrowIcon, styles.nextIcon)} />
        </button>

        <div className={styles.rowsPerPage}>
          <span className={styles.rowsLabel}>Строк на странице</span>
          <div className={styles.rowsSelect}>
            <span>50</span>
            <Chevron className={styles.rowsChevron} />
          </div>
        </div>
      </div>
    </div>
  );
};
