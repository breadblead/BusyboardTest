import React from 'react';
import type { TooltipRenderProps } from 'react-joyride';

import Close from '../img/close.svg';
import styles from './OnboardingTooltip.module.scss';

export const OnboardingTooltip = ({
  index,
  size,
  step,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
}: TooltipRenderProps) => (
  <div {...tooltipProps} className={styles.tooltip}>
    <button {...closeProps} className={styles.closeButton} aria-label="Закрыть онбординг">
      <Close className={styles.closeIcon} />
    </button>

    {step.title && <div className={styles.title}>{step.title}</div>}
    <div className={styles.content}>{step.content}</div>

    <div className={styles.footer}>
      <span className={styles.progress}>
        Шаг {index + 1} из {size}
      </span>
      <div className={styles.actions}>
        <button {...backProps} className={styles.backButton}>
          Назад
        </button>
        <button {...primaryProps} className={styles.nextButton}>
          Далее
        </button>
      </div>
    </div>
  </div>
);
