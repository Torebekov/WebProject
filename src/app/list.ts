﻿import {CATEGORIES} from './mock-categories';
import { Category } from './category';
import { Comment } from './comment';

export interface Bear {
    id: number;
    title: string;
    description: string;    
    likes: number;
    comments: string[]; 
    category: Category;
}
export const List = [
  {
    id: 1,
    title: 'Большой Тед',
    description: 'Какой подарок сделать девушке? Двухметровый мишка — отличный вариант. Огромные плюшевые медведи высотой 200см, станут преданными защитниками и друзьями для вашей второй половинки. Это приятный подарок для любимой девушки.',
    likes: 17,
    comments: [
            'Можно какую нибудь скидку сделать???' +
            'Доставка есть?????',
            'Классные мишки советую купить, я девушке на 8 марта здесь купил' +
            ' хотел трехметровую заказать можно ваш номер????',
            'Если три возбму уступите?' +
            'Оптом можно купить?'
        ],
    front_image: 'http://hestia.sydney.mcdir.ru/wp-content/uploads/2018/07/002029_1384377629.png',
    category: CATEGORIES[0]
  },
  {
    id: 2,
    title: 'Миша Тедди',
    description: 'Друзья у нас в магазине большой выбор плюшевых игрушек. Отличного качества Размеры от 20см до 3м. Качественные материалы шедрая набивка! И Бесплатная доставка по Алматы.',
    likes: 39,
    comments: [
            'Можно какую нибудь скидку сделать???' +
            'Доставка есть?????',
            'Классные мишки советую купить, я девушке на 8 марта здесь купил' +
            ' хотел трехметровую заказать можно ваш номер????',
            'Если три возбму уступите?' +
            'Оптом можно купить?'
    ],
    front_image: 'http://hestia.sydney.mcdir.ru/wp-content/uploads/2018/07/Teddy-Bear-PNG-HD.png',
    category: CATEGORIES[0]
  },
  {
    id: 3,
    title: 'Мишка Гамми',
    description: 'Друзья скоро новый год и мы подготовили вам большие скидки к нашим подаркам! Звоните пишите.',
    likes: 19,
    comments: [
     'Можно какую нибудь скидку сделать???' +
            'Доставка есть?????',
            'Классные мишки советую купить, я девушке на 8 марта здесь купил' +
            ' хотел трехметровую заказать можно ваш номер????',
            'Если три возбму уступите?' +
            'Оптом можно купить?'
    ],
    front_image: 'http://hestia.sydney.mcdir.ru/wp-content/uploads/2018/07/002128_1384377688.png',
    category: CATEGORIES[0]
  },
  {
    id: 4,
    title: 'Медведь Эрнест',
    description: 'До конца этого месяца у вас есть возможность купить плюшевых медведей со скидкой 200 - Показать номер - тг. Скидки действуют только при самовывозе с магазина.'+'Адрес и цены на медведей вы сможете узнать написав нам на ватс апп.',
    likes: 235,
    comments: [
      'Можно какую нибудь скидку сделать???' +
            'Доставка есть?????',
            'Классные мишки советую купить, я девушке на 8 марта здесь купил' +
            ' хотел трехметровую заказать можно ваш номер????',
            'Если три возбму уступите?' +
            'Оптом можно купить?'
    ],
    front_image: 'http://hestia.sydney.mcdir.ru/wp-content/uploads/2018/07/PNGPIX-COM-Teddy-Bear-PNG-Transparent-Image-1.png',
    category: CATEGORIES[1]
  },
  {
    id: 5,
    title: 'Медвежонок Паддингтон',
    description: 'Очень красивые и ОГРОМНЫЕ плюшевые мишки в городе Алматы. Размеры от 1м до 230см. Отправляем по всему Казахстану.',
    likes: 135,
    comments: [
      'Можно какую нибудь скидку сделать???' +
            'Доставка есть?????',
            'Классные мишки советую купить, я девушке на 8 марта здесь купил' +
            ' хотел трехметровую заказать можно ваш номер????',
            'Если три возбму уступите?' +
            'Оптом можно купить?'
    ],
    front_image: 'http://hestia.sydney.mcdir.ru/wp-content/uploads/2018/07/20304605.png',
    category: CATEGORIES[1]
  },
  {
    id: 6,
    title: 'Умка',
    description: 'Магазин Больших плюшевых мишек и подарков поздравляют вас с наступающим праздником 14 февраля и 8 марта! У нас самые хорошие качества и доступные цены! Постоянным клиентам скидки и бонусы ! Мишки Тедди Нестор',
    likes: 27,
    comments: [
            'Можно какую нибудь скидку сделать???' +
            'Доставка есть?????',
            'Классные мишки советую купить, я девушке на 8 марта здесь купил' +
            ' хотел трехметровую заказать можно ваш номер????',
            'Если три возбму уступите?' +
            'Оптом можно купить?'
    ],
    front_image: 'http://hestia.sydney.mcdir.ru/wp-content/uploads/2018/07/Teddy-Bear-Blue-HD-PNG-File-1.png',
    category: CATEGORIES[2]
  },
  {
    id: 7,
    title: 'Мишка Барни',
    description: 'Друзья плюшевые мишки отличного качества. Новогодние скидочные цены . Доставка и самовывоз. Плюшевые Мишки в алматы Большие мишки мишка 2м купить мишку заказать плюшевые игрушки',
    likes: 208,
    comments: [
            'Можно какую нибудь скидку сделать???' +
            'Доставка есть?????',
            'Классные мишки советую купить, я девушке на 8 марта здесь купил' +
            ' хотел трехметровую заказать можно ваш номер????',
            'Если три возбму уступите?' +
            'Оптом можно купить?'
    ],
    front_image: 'http://hestia.sydney.mcdir.ru/wp-content/uploads/2018/07/0_77bb1_13bee07a_L.png',
    category: CATEGORIES[2]
  }  
].sort((a: Bear, b: Bear) => {if(a.likes>b.likes){ return -1}; if (a.likes<b.likes){ return 1}; return 0;})