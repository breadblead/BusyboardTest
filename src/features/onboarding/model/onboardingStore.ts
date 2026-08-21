import { makeAutoObservable } from 'mobx';
import type { Step } from 'react-joyride';

import { onboardingSteps } from '../config/steps';

class OnboardingStore {
  run = false;
  stepIndex = 0;
  steps: Step[] = onboardingSteps;

  constructor() {
    makeAutoObservable(this);
  }

  start = () => {
    this.stepIndex = 0;
    this.run = true;
  };

  close = () => {
    this.run = false;
  };

  setStepIndex = (index: number) => {
    this.stepIndex = index;
  };
}

export const onboardingStore = new OnboardingStore();
