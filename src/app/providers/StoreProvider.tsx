import React, { createContext, type PropsWithChildren, useContext } from 'react';

import { onboardingStore } from '@features/onboarding';

const rootStore = {
  onboarding: onboardingStore,
};

type RootStore = typeof rootStore;

const StoreContext = createContext<RootStore>(rootStore);

export const StoreProvider = ({ children }: PropsWithChildren) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
