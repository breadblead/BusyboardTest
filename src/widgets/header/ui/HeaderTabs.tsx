import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './HeaderTabs.module.scss';

const TABS = ['Финансы', 'Склад', 'Аналитика', 'Автоматизация'] as const;

export const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <nav className={styles.tabs}>
      {TABS.map((tab, index) => (
        <button
          key={tab}
          type="button"
          className={classNames(styles.tab, { [styles.tabActive]: index === activeTab })}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};
