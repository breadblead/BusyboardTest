import React, { type PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppRouterProvider = ({ children }: PropsWithChildren) => (
  <BrowserRouter>{children}</BrowserRouter>
);
