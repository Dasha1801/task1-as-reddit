import {
  ArticleInfo,
  ICommentInfo,
  IDataTable,
  IFilters,
  IModerator,
  IRulesSubreddit,
  IItemsServices21,
  IProduct,
} from './interfaces';

export const item: ArticleInfo = {
  title: 'My website freezes after ...?',
  id: 'xg98gg',
  selftext: 'What trying to do:I work for a TV station as a broadcast Technician.What try',
  url: 'https://www.reddit.com/r/javascript/comments/',
  score: 55,
  num_comments: 3,
};

export const commentMock: ICommentInfo = {
  author: 'simon',
  body: 'It will load the image only at the point when you assign an src to it, browsers do that.',
  id: 'xf458l5',
  score: 18,
  created_utc: 1643379472,
  replies: undefined,
};

export const rules: IRulesSubreddit[] = [
  {
    title: 'Remember the human.',
    description: "Remember the human. It's ok to disagree, but we should attack ideas, not people.",
    id: 'r1',
  },
  {
    title: '/r/JavaScript is not a support forum',
    description: 'Is this a help request? Try /r/LearnJavascript instead!',
    id: 'r2',
  },
  { title: 'Advertising', description: 'Advertising paid products and services is prohibited.', id: 'r3' },
  {
    title: 'Excessive Self-Promotion',
    description: `It's ok to promote your own content, or content that you're 
    otherwise vested in, but it should not
    constitute a majority of your contributions.`,
    id: 'r4',
  },
  { title: 'Java !== Javascript', description: 'Java is not the same as Javascript.', id: 'r5' },
  {
    title: 'Low-effort content (listicles, memes, etc.)',
    description: 'Low-effort content such as listicles, memes, clickbait, etc. is prohibited.',
    id: 'r6',
  },
  {
    title: "Where's the Javascript?",
    description:
      "Demos can be fun, but they really don't provide for much discussion unless code is provided as well.",
    id: 'r7',
  },
];

export const dataTable: IDataTable[] = [
  {
    date: 'February 18',
    organizers: 'Amir Khan vs Kell Brook',
    network: 'Showtime',
    id: 'tr1',
  },
  {
    date: 'February 19',
    organizers: 'Zaur Abdullaev vs Jorge Linares',
    network: 'ESPN+',
    id: 'tr2',
  },
  {
    date: 'February 20',
    organizers: 'Zaur Abdullaev vs Jorge Linares',
    network: 'DAZN',
    id: 'tr3',
  },
  {
    date: 'February 21',
    organizers: 'Amir Khan vs Kell Brook',
    network: 'Sky Sports Box Office (UK), ESPN+ (USA)',
    id: 'tr4',
  },
  {
    date: 'February 22',
    organizers: 'Josh Taylor vs Jack Catterall',
    network: 'Showtime',
    id: 'tr5',
  },
  {
    date: 'February 23',
    organizers: 'Amir Khan vs Kell Brook',
    network: 'Sky Sports Box Office (UK), ESPN+ (USA)',
    id: 'tr6',
  },
  {
    date: 'February 24',
    organizers: 'Josh Taylor vs Jack Catterall',
    network: 'Showtime',
    id: 'tr7',
  },
];

export const filters: IFilters[] = [
  { name: 'AskJS', id: 'f1', order: 1 },
  { name: 'Showoff Saturday', id: 'f2', order: 2 },
  { name: 'WTF Wednesday', id: 'f3', order: 3 },
  { name: 'Subreddit Stats', id: 'f4', order: 4 },
];

export const moderators: IModerator[] = [
  { name: 'u/jeresig', id: 'm1', text: '' },
  { name: 'u/honestbleeps', id: 'm2', text: 'Reddit Enhancement Suite' },
  { name: 'u/kenman', id: 'm3', text: '' },
  { name: 'u/TheNumberOneCulprit', id: 'm4', text: 'tabs and semicolons...' },
  { name: 'u/AssistantBOT', id: 'm5', text: "- I'm actually written in Python..." },
  { name: 'u/Ustice', id: 'm6', text: '' },
  { name: 'u/AutoModerator', id: 'm7', text: '' },
];

export const dataServices21vek: IItemsServices21 = {
  '476171': [
    {
      name: 'Холодильник без электронного управления на дверях (за 2 двери)',
      id: '42',
      code: '41860',
      description: `При наличии электронных доводчиков стоимость перенавески дверей составит 45 руб.,
      время работ – 1-1,5 часа. Производится в Минске, Минском районе, в Бресте, Гомеле, Гродно, Могилеве,
      Витебске, Борисове, Бобруйске, Барановичах, Орше, Островце, Кобрине, Мозыре, Пинске, Лиде, Жлобине,
      Полоцке.`,
      link: '',
      price: '45.00',
      outsource: true,
      category: {
        name: 'Перенавеска дверей',
        id: '15',
        type: 'maintenance',
      },
    },
    {
      name: 'Надежная защита +2 года (от 1000 руб.)',
      id: '5002',
      code: '6298578',
      description: '',
      link: 'https://www.21vek.by/info/extended_warranty.html',
      price: '188.82',
      outsource: false,
      category: {
        name: 'Надежная защита',
        id: '157',
        type: 'maintenance',
      },
    },
    {
      name: 'Надежная защита +1 год (от 1000 руб.)',
      id: '5011',
      code: '6298567',
      description: '',
      link: 'https://www.21vek.by/info/extended_warranty.html',
      price: '167.84',
      outsource: false,
      category: {
        name: 'Надежная защита',
        id: '157',
        type: 'maintenance',
      },
    },
  ],
  '6099773': [
    {
      name: 'Сертификат «Негарантийный ремонт» на 1 год',
      id: '2478',
      code: '1060421',
      description: `Ремонт устройства – 1 раз, консультация по эксплуатации – неограниченное число 
      раз в течение 12 месяцев в компании «Единый Сервисный Центр». Для смартфонов и планшетов.`,
      link: 'https://www.21vek.by/services/nonwarranty_repair.html',
      price: '44.85',
      outsource: false,
      category: {
        name: 'Негарантийный ремонт',
        id: '21',
        type: 'maintenance',
      },
    },
    {
      name: 'Android Стандарт(доступно только при самовывозе и наличии SIM-карты)',
      id: '3008',
      code: '5907362',
      description: `Скидка 50% на услугу, если с этим заказом оформлен сертификат
         на негарантийный ремонт. Для смартфона или планшета. В услугу входит: включение 
         устройства, настройка по шагам, синхронизация контактов, создание учетной записи в Play Market, 
         установка 1 мессенджера, заведение учетной записи, выдача памятки с данными учетной записи.`,
      link: '',
      price: '15.00',
      outsource: false,
      category: {
        name: 'Настройка устройства (только в ПВЗ)',
        id: '123',
        type: 'maintenance',
      },
    },
    {
      name: 'Перенос контактов(доступно только при самовывозе)',
      id: '3157',
      code: '5909271',
      description: 'Для смартфона или планшета. Перенос данных записной книжки на новое устройство.',
      link: '',
      price: '10.00',
      outsource: false,
      category: {
        name: 'Настройка устройства (только в ПВЗ)',
        id: '123',
        type: 'maintenance',
      },
    },
    {
      name: 'Сертификат «Негарантийный ремонт» на 2 года',
      id: '4176',
      code: '5977695',
      description: `Ремонт устройства – 2 раза, консультация по эксплуатации – неограниченное
        число раз в течение 24 месяцев в компании «Единый Сервисный Центр».
        Для смартфонов и планшетов.`,
      link: 'https://www.21vek.by/services/nonwarranty_repair.html',
      price: '74.75',
      outsource: false,
      category: {
        name: 'Негарантийный ремонт',
        id: '21',
        type: 'maintenance',
      },
    },
    {
      name: 'Сертификат «Исправный телефон» на 1 год (защита дисплея)',
      id: '4177',
      code: '5977694',
      description: `Ремонт дисплея – 1 раз, консультация по эксплуатации –
        неограниченное число раз в течение 12 месяцев в компании «Единый Сервисный Центр».
        Для смартфонов и планшетов.`,
      link: 'https://www.21vek.by/services/nonwarranty_repair.html',
      price: '35.88',
      outsource: false,
      category: {
        name: 'Защита дисплея',
        id: '147',
        type: 'maintenance',
      },
    },
    {
      name: 'Android Премиум(доступно только при самовывозе и наличии SIM-карты)',
      id: '4624',
      code: '6124798',
      description: `Скидка 50% на услугу, если с этим заказом оформлен сертификат
        на негарантийный ремонт. Для смартфона или планшета. В услугу входит: включение устройства,
        настройка по шагам, синхронизация контактов, создание учетной записи в Play Market,
        установка из него приложений (до 3 мессенджеров, до 3 соцсетей на выбор),
        заведение учетных записей в приложениях, выдача памятки с
        данными учетных записей. Перенос данных со старого устройства (при его наличии) с помощью
        сопряжения или приложения.`,
      link: '',
      price: '20.00',
      outsource: false,
      category: {
        name: 'Настройка устройства (только в ПВЗ)',
        id: '123',
        type: 'maintenance',
      },
    },
  ],
  '6519574': [
    {
      name: 'Телевизор с диагональю до 42"',
      id: '1',
      code: '41867',
      description: `Производится в Минске, Минском районе, в Бресте, Гомеле,
        Гродно, Могилеве, Витебске, Борисове, Бобруйске, Барановичах, Орше,
        Островце, Кобрине, Мозыре, Пинске, Лиде, Жлобине, Полоцке.`,
      link: '',
      price: '40.00',
      outsource: true,
      category: {
        name: 'Установка и подвешивание',
        id: '12',
        type: 'maintenance',
      },
    },
    {
      name: 'Надежная защита +1 год (500-999 руб.)',
      id: '4999',
      code: '6298564',
      description: '',
      link: 'https://www.21vek.by/info/extended_warranty.html',
      price: '112.03',
      outsource: false,
      category: {
        name: 'Надежная защита',
        id: '157',
        type: 'maintenance',
      },
    },
  ],
};

export const products21: IProduct[] = [
  {
    name: 'Кабель Apple MKQ42',
    code: '458.328',
    price: '139,00',
    serviceId: '',
    photo: 'https://res.cloudinary.com/megacritic/image/upload/v1646901316/pxls2j9rre0dwsleaatr.png',
  },
  {
    name: 'Смартфон Apple iPhone 11 64GB / MHDF3 (фиолетовый)',
    code: '6.267.216',
    price: '2 099,00',
    serviceId: '6099773',
    photo: 'https://res.cloudinary.com/megacritic/image/upload/v1646901342/shbtuzxyscrfhlkfgbco.png',
  },
  {
    name: 'Ноутбук Apple MacBook Air 13" M1 2020 256GB / MGN63 (серый) длинна 38',
    code: '5.666.679',
    price: '3 533,07',
    serviceId: '6519574',
    photo: 'https://res.cloudinary.com/megacritic/image/upload/v1646901346/kwrzkqie3l337w7ai9cp.png',
  },
  {
    name: 'Холодильник с морозильником Bosch Serie 6 VitaFresh Plus KGN39AW32R',
    code: '6.150.224',
    price: '1 529,15',
    serviceId: '476171',
    photo: 'https://res.cloudinary.com/megacritic/image/upload/v1646901333/watoxlfhvberxfdfdkec.png',
  },
];
