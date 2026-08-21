import React from 'react';

import { OnboardingTour } from '@features/onboarding';

import { Toolbar } from './Toolbar';
import { FilterPanel } from './FilterPanel';
import { DeliveriesTable } from './DeliveriesTable';
import { Pagination } from './Pagination';
import styles from './DeliveriesPage.module.scss';

export const DeliveriesPage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.titleTab}>Заявки на поставку</h1>
      <div className={styles.card}>
        <Toolbar />
        <FilterPanel />
        <DeliveriesTable />
        <Pagination />
      </div>
      <OnboardingTour />
    </div>
  );
};
