import { Stock } from '../types/Stock';

export const stocks: Stock[] = [
  {
    id: 1,
    ticker: 'AAPL',
    name: 'Apple Inc.',
    price: 174.99,
    dailyChange: 0.8,
    bio: 'Apple designs and manufactures consumer electronics and software.',
    tags: ['Tech', 'Large Cap']
  },
  {
    id: 2,
    ticker: 'TSLA',
    name: 'Tesla Inc.',
    price: 245.60,
    dailyChange: -1.5,
    bio: 'Tesla builds electric vehicles and renewable energy products.',
    tags: ['Automotive', 'Growth']
  },
  {
    id: 3,
    ticker: 'PLTR',
    name: 'Palantir Technologies',
    price: 18.70,
    dailyChange: 2.3,
    bio: 'Palantir develops big-data analytics software for enterprises and governments.',
    tags: ['Software', 'AI']
  },
  // …add more mock stocks here
];
