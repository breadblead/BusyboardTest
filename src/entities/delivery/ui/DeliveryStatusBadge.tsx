import React from 'react';
import classNames from 'classnames';

import type { DeliveryStatus } from '../model/types';
import styles from './DeliveryStatusBadge.module.scss';

interface DeliveryStatusBadgeProps {
  status: DeliveryStatus;
}

export const DeliveryStatusBadge = ({ status }: DeliveryStatusBadgeProps) => {
  return (
    <span
      className={classNames(styles.badge, {
        [styles.success]: status.variant === 'success',
        [styles.error]: status.variant === 'error',
      })}
    >
      {status.label}
    </span>
  );
};
