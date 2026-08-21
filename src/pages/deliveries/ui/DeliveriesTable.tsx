import React from 'react';

import { deliveryMocks, DeliveryStatusBadge } from '@entities/delivery';
import Sort from '../img/sort.svg';
import styles from './DeliveriesTable.module.scss';

const COLUMNS = [
  { key: 'id', label: '№', sortable: false, width: 80 },
  { key: 'date', label: 'Дата', sortable: true, width: 150 },
  { key: 'organization', label: 'Организация', sortable: true, width: 240 },
  { key: 'counterparty', label: 'Контрагент', sortable: true, width: 250 },
  { key: 'deliveryNumber', label: '№ поставки', sortable: true, width: 150 },
  { key: 'quantity', label: 'Кол-во', sortable: true, width: 100 },
  { key: 'status', label: 'Статус', sortable: true, width: 200 },
  { key: 'acceptanceDate', label: 'Дата приемки', sortable: true, width: 200 },
  { key: 'amount', label: 'Сумма', sortable: true, width: 140 },
  { key: 'comment', label: 'Комментарий', sortable: true, width: 200 },
] as const;

export const DeliveriesTable = () => {
  return (
    <div className={styles.wrapper} data-tour="deliveries-table">
      <table className={styles.table}>
        <thead>
          <tr>
            {COLUMNS.map((column) => (
              <th
                key={column.key}
                className={styles.headCell}
                style={column.width ? { width: column.width, minWidth: column.width } : undefined}
              >
                <span className={styles.headLabel}>
                  {column.label}
                  {column.sortable && <Sort className={styles.sortIcon} />}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {deliveryMocks.map((delivery) => (
            <tr key={delivery.id} className={styles.row}>
              <td className={styles.cell}>{delivery.id}</td>
              <td className={styles.cell}>{delivery.date}</td>
              <td className={styles.cell}>{delivery.organization}</td>
              <td className={styles.cell}>{delivery.counterparty}</td>
              <td className={styles.cell}>{delivery.deliveryNumber}</td>
              <td className={styles.cell}>{delivery.quantity}</td>
              <td className={styles.cell}>
                <DeliveryStatusBadge status={delivery.status} />
              </td>
              <td className={styles.cell}>
                {delivery.acceptanceDate && (
                  <div className={styles.acceptance}>
                    <span>{delivery.acceptanceDate}</span>
                    {delivery.deliveryTime && (
                      <span className={styles.acceptanceSecondary}>{delivery.deliveryTime}</span>
                    )}
                  </div>
                )}
              </td>
              <td className={styles.cell}>{delivery.amount}</td>
              <td className={styles.cell}>{delivery.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
