export type DeliveryStatusVariant = 'success' | 'error';

export interface DeliveryStatus {
  label: string;
  variant: DeliveryStatusVariant;
}

export interface Delivery {
  id: string;
  date: string;
  organization: string;
  counterparty: string;
  deliveryNumber: string;
  quantity: number;
  status: DeliveryStatus;
  acceptanceDate?: string;
  deliveryTime?: string;
  amount: string;
  comment: string;
}
