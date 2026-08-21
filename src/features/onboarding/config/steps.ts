import type { Step } from 'react-joyride';

export const onboardingSteps: Step[] = [
  {
    target: 'body',
    placement: 'center',
    disableBeacon: true,
    title: 'Добро пожаловать',
    content:
      'Добро пожаловать в раздел заявки на поставку! Тут вы можете создать заявку на поставку и она появится в вашем кабинете или выгрузить уже созданные, чтобы на основе них создать отгрузки',
  },
  {
    target: '[data-tour="download-api"]',
    placement: 'bottom',
    disableBeacon: true,
    title: 'Загрузка заявок',
    content: 'Нажмите на эту кнопку, чтобы подтянуть актуальные заявки на поставку',
  },
  {
    target: '[data-tour="create-request"]',
    placement: 'bottom',
    disableBeacon: true,
    title: 'Создание заявки',
    content: 'Супер, теперь давайте создадим свою собственную заявку на поставку!',
  },
  {
    target: '[data-tour="deliveries-table"]',
    placement: 'top',
    disableBeacon: true,
    title: 'Готово!',
    content:
      'Вы большой молодец! Поздравляем с освоением нового раздела, надеюсь он принесет вам много пользы!',
  },
];
