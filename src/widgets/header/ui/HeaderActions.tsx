import React from 'react';

import GearBadge from '../img/gear-badge.svg';
import CheckBadge from '../img/check-badge.svg';
import CounterBadge from '../img/counter-badge.svg';
import styles from './HeaderActions.module.scss';

export const HeaderActions = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.continueSetup}>
        <GearBadge className={styles.badge} />
        <span className={styles.continueSetupText}>
          Продолжить
          <br />
          настройку
        </span>
      </div>

      <div className={styles.subscribe}>
        <CounterBadge className={styles.badge} />
        <span className={styles.subscribeText}>
          Для продолжения
          <br />
          продлите подписку
        </span>
      </div>

      <div className={styles.checklist}>
        <CheckBadge className={styles.badge} />
        <span className={styles.checklistText}>
          <span className={styles.checklistTitle}>Чеклист запуска</span>
          <span className={styles.checklistProgress}>2/12</span>
        </span>
      </div>
    </div>
  );
};
