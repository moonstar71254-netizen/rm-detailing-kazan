export const siteConfig = {
  // Название студии и контакты
  brand: {
    name: 'РМ Детейлинг',
    latinName: 'RM-Detailing',
    city: 'Казань',
    address: 'ул. Седова, 24, корп. 1',
    hours: 'Ежедневно 09:00–20:00',
    telegramUrl: 'https://t.me/RMDetailing',
    telegramHandle: '@RMDetailing',
  },

  // Пункты верхнего меню
  navigation: [
    { label: 'Направления', href: '#directions' },
    { label: 'Прайс', href: '#services' },
    { label: 'Студия', href: '#studio' },
    { label: 'Контакты', href: '#contacts' },
  ],

  // Первый экран
  hero: {
    eyebrow: 'Детейлинг-центр · Казань',
    title: 'РМ Детейлинг',
    subtitle: 'Полировка, керамическое покрытие, химчистка салона и шумоизоляция в закрытом боксе.',
    ctaLabel: 'Записаться в Telegram',
    secondaryCtaLabel: 'Смотреть прайс',
    image: './images/hero-studio.jpg',
    imageAlt: 'Автомобиль в темном боксе детейлинг-центра РМ Детейлинг',
  },

  // Реальные факты и рейтинг студии
  rating: {
    score: '4.8',
    platform: 'Яндекс Карты',
    details: '29 оценок · 20 отзывов',
  },

  // Ключевые направления с фотографиями
  directions: [
    {
      id: 'polishing',
      index: '01',
      title: 'Полировка кузова и оптики',
      summary: 'Глянцевая и восстановительная полировка ЛКП, устранение помутнения фар.',
      startingPrice: 'от 2 000 ₽',
      image: './images/polishing.jpg',
      imageAlt: 'Полировка капота автомобиля в темном детейлинг-боксе',
    },
    {
      id: 'protection',
      index: '02',
      title: 'Защитные составы',
      summary: 'Керамическое покрытие, металлокомпозит, твердый воск и антидождь на стекла.',
      startingPrice: 'от 3 000 ₽',
      image: './images/ceramic.jpg',
      imageAlt: 'Гидрофобный эффект керамического покрытия на черном кузове',
    },
    {
      id: 'interior',
      index: '03',
      title: 'Салон и шумоизоляция',
      summary: 'Детейлинг-химчистка салона, уход за кожей, мойка в 6 фаз и шумоизоляция.',
      startingPrice: 'от 2 500 ₽',
      image: './images/interior.jpg',
      imageAlt: 'Чистый кожаный салон автомобиля после детейлинг-химчистки',
    },
  ],

  // Категории фильтра прайса
  serviceCategories: [
    { id: 'all', label: 'Все услуги' },
    { id: 'polishing', label: 'Полировка' },
    { id: 'protection', label: 'Защита' },
    { id: 'care', label: 'Салон и уход' },
  ],

  // Полный прайс-лист
  services: [
    {
      id: 'headlights',
      name: 'Полировка фар',
      price: '2 000 ₽',
      category: 'polishing',
      categoryLabel: 'Полировка',
    },
    {
      id: 'body-cleaning',
      name: 'Химчистка кузова',
      price: '2 300 ₽',
      category: 'care',
      categoryLabel: 'Уход',
    },
    {
      id: 'leather-care',
      name: 'Кондиционер кожи',
      price: '2 500 ₽',
      category: 'care',
      categoryLabel: 'Салон',
    },
    {
      id: 'anti-rain',
      name: 'Антидождь',
      price: '3 000 ₽',
      category: 'protection',
      categoryLabel: 'Защита',
    },
    {
      id: 'hard-wax',
      name: 'Твердый воск',
      price: '3 500 ₽',
      category: 'protection',
      categoryLabel: 'Защита',
    },
    {
      id: 'wash-6-phase',
      name: 'Детейлинг-мойка в 6 фаз + коврики',
      price: '5 500 ₽',
      category: 'care',
      categoryLabel: 'Мойка',
    },
    {
      id: 'ceramic-1',
      name: 'Керамическое покрытие (1 слой)',
      price: '8 000 ₽',
      category: 'protection',
      categoryLabel: 'Защита',
    },
    {
      id: 'soundproofing',
      name: 'Шумоизоляция',
      price: '12 000 ₽',
      category: 'care',
      categoryLabel: 'Комфорт',
    },
    {
      id: 'gloss-polishing',
      name: 'Глянцевая полировка кузова',
      price: '15 000 ₽',
      category: 'polishing',
      categoryLabel: 'Полировка',
    },
    {
      id: 'restoration-polishing',
      name: 'Восстановительная полировка кузова',
      price: '22 000 ₽',
      category: 'polishing',
      categoryLabel: 'Полировка',
    },
    {
      id: 'interior-detailing',
      name: 'Детейлинг-химчистка салона',
      price: '22 000 ₽',
      category: 'care',
      categoryLabel: 'Салон',
    },
    {
      id: 'metal-composite',
      name: 'Металлокомпозит',
      price: '70 000 ₽',
      category: 'protection',
      categoryLabel: 'Защита',
    },
  ],

  // Условия и сервис в студии
  studioFeatures: [
    {
      code: '01',
      title: 'Фотофиксация этапов',
      text: 'Отправляем фото процесса по мере выполнения работ, чтобы вы видели состояние автомобиля на каждом шаге.',
    },
    {
      code: '02',
      title: 'Лаундж-зона с кофе и Wi-Fi',
      text: 'Комфортная зона ожидания внутри студии, если вы остаетесь на время быстрых процедур или при приемке авто.',
    },
    {
      code: '03',
      title: 'Рейтинг 4.8 на Яндекс Картах',
      text: '29 оценок и 20 отзывов от владельцев автомобилей в Казани.',
    },
  ],

  // Финальный блок записи
  ctaSection: {
    eyebrow: 'Запись без ожидания',
    title: 'Обсудить автомобиль в Telegram',
    text: 'Напишите марку, модель и желаемые работы — подскажем точное время, подготовку и свободное окно.',
    buttonLabel: 'Написать в Telegram',
  },
};
