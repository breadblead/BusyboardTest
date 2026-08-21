import React from 'react';
import { observer } from 'mobx-react-lite';
import Joyride, { STATUS, type CallBackProps } from 'react-joyride';

import { onboardingStore } from '../model/onboardingStore';

export const OnboardingTour = observer(() => {
  const handleCallback = ({ status, index }: CallBackProps) => {
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      onboardingStore.close();
      return;
    }

    onboardingStore.setStepIndex(index);
  };

  return (
    <Joyride
      steps={onboardingStore.steps}
      run={onboardingStore.run}
      stepIndex={onboardingStore.stepIndex}
      continuous
      showSkipButton
      callback={handleCallback}
    />
  );
});
