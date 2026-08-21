import { makeAutoObservable } from 'mobx';
import type { Step } from 'react-joyride';

import { onboardingSteps } from '../config/steps';

class OnboardingStore {
  run = true;
  stepIndex = 0;
  cycle = 0;
  steps: Step[] = onboardingSteps;

  constructor() {
    makeAutoObservable(this);
  }

  close = () => {
    this.run = false;
  };

  next = () => {
    if (this.stepIndex + 1 >= this.steps.length) {
      this.stepIndex = 0;
      this.cycle += 1;
    } else {
      this.stepIndex += 1;
    }
  };

  prev = () => {
    this.stepIndex = this.stepIndex - 1 < 0 ? this.steps.length - 1 : this.stepIndex - 1;
  };
}

export const onboardingStore = new OnboardingStore();
