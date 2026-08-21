import type { Delivery } from './types';

export const deliveryMocks: Delivery[] = [
  {
    id: '00001',
    date: '01.01.2024 12:40',
    organization: 'ИП Иванов Иван Иванович',
    counterparty: 'ООО "Название компании"',
    deliveryNumber: '123123123123123',
    quantity: 1,
    status: { label: 'Принят без расхождений', variant: 'success' },
    acceptanceDate: '27.07.2024 12:00',
    deliveryTime: 'Время доставки: 4д. 12ч.',
    amount: '100 000,00',
    comment: 'Первый заказ для МП',
  },
  {
    id: '00002',
    date: '01.01.2024 12:40',
    organization: 'ИП Иванов Иван Иванович',
    counterparty: 'ООО "Название компании"',
    deliveryNumber: '123123123123123',
    quantity: 1,
    status: { label: 'Не зарезервирован', variant: 'error' },
    amount: '100 000,00',
    comment: 'Первый заказ для МП',
  },
];
