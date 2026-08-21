import React from 'react';
import { observer } from 'mobx-react-lite';
import Joyride, { ACTIONS, EVENTS, STATUS, type CallBackProps } from 'react-joyride';

import { onboardingStore } from '../model/onboardingStore';
import { OnboardingTooltip } from './OnboardingTooltip';

export const OnboardingTour = observer(() => {
  const handleCallback = ({ action, status, type }: CallBackProps) => {
    if (action === ACTIONS.CLOSE) {
      onboardingStore.close();
      return;
    }

    if (status === STATUS.FINISHED) {
      onboardingStore.next();
      return;
    }

    if (type === EVENTS.STEP_AFTER) {
      if (action === ACTIONS.PREV) {
        onboardingStore.prev();
      } else {
        onboardingStore.next();
      }
    }
  };

  return (
    <Joyride
      key={onboardingStore.cycle}
      steps={onboardingStore.steps}
      run={onboardingStore.run}
      stepIndex={onboardingStore.stepIndex}
      continuous
      disableOverlayClose
      disableCloseOnEsc
      tooltipComponent={OnboardingTooltip}
      callback={handleCallback}
    />
  );
});
