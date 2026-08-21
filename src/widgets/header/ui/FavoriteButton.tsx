import React from 'react';

import Star from '../img/star.svg';
import styles from './FavoriteButton.module.scss';

export const FavoriteButton = () => {
  return (
    <button type="button" className={styles.favorite}>
      <Star className={styles.icon} />
      <span className={styles.label}>Избранное</span>
    </button>
  );
};
