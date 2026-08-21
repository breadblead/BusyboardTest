import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { DeliveriesPage } from '@pages/deliveries';
import { Header } from '@widgets/header';

import { AppRouterProvider, QueryProvider, StoreProvider } from './providers';
import styles from './App.module.scss';
import './styles/index.scss';

export const App = () => {
  return (
    <QueryProvider>
      <StoreProvider>
        <AppRouterProvider>
          <div className={styles.root}>
            <Header />
            <main className={styles.main}>
              <Routes>
                <Route path="/" element={<DeliveriesPage />} />
              </Routes>
            </main>
          </div>
        </AppRouterProvider>
      </StoreProvider>
    </QueryProvider>
  );
};
