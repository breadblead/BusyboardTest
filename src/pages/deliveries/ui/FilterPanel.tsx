import React from 'react';
import classNames from 'classnames';

import Chevron from '../img/chevron.svg';
import styles from './FilterPanel.module.scss';

interface FilterFieldConfig {
  label: string;
  value: string;
  placeholder?: boolean;
  active?: boolean;
}

const ROW_1: FilterFieldConfig[] = [
  { label: 'Дата', value: '01.01.2025 - 31.01.2025' },
  { label: 'Контрагент', value: 'Выбрать', placeholder: true },
  { label: 'Организация', value: 'Выбрать', placeholder: true },
  { label: 'Товар', value: 'Выбрать', placeholder: true },
  { label: 'Склад отправителя', value: 'Выбрать склад', placeholder: true, active: true },
];

const ROW_2: FilterFieldConfig[] = [
  { label: '№ поставки', value: 'Выбрать', placeholder: true },
  { label: 'Способ доставки', value: 'Выбрать', placeholder: true },
  { label: 'Статус операции', value: 'Выбрать', placeholder: true },
  { label: 'Склад получателя', value: 'Выбрать', placeholder: true },
  { label: 'Проведено', value: 'Выбрать', placeholder: true },
];

const FilterField = ({ label, value, placeholder, active, fixed }: FilterFieldConfig & { fixed?: boolean }) => (
  <div className={classNames(styles.field, fixed ? styles.fieldFixed : styles.fieldFlex)}>
    <span className={styles.label}>{label}</span>
    <div className={classNames(styles.control, { [styles.controlActive]: active })}>
      <span className={classNames(styles.value, { [styles.placeholder]: placeholder })}>{value}</span>
      <Chevron className={classNames(styles.chevron, { [styles.chevronUp]: active })} />
    </div>
  </div>
);

const FilterRow = ({ fields }: { fields: FilterFieldConfig[] }) => (
  <div className={styles.row}>
    {fields.map((field, index) => (
      <FilterField key={field.label} {...field} fixed={index === 0} />
    ))}
  </div>
);

export const FilterPanel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <FilterRow fields={ROW_1} />
        <FilterRow fields={ROW_2} />
      </div>

      <div className={styles.pills}>
        <button type="button" className={styles.pill}>
          Фильтр первый
        </button>
        <button type="button" className={classNames(styles.pill, styles.pillActive)}>
          Фильтр первый
        </button>
      </div>
    </div>
  );
};
