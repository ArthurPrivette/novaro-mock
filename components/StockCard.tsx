// components/StockCard.tsx
import React from 'react';
import { Stock } from '../types/Stock';
import useSWR from 'swr';
import { getQuote } from '../lib/quotes';

interface Props {
  stock: Stock;
}

const StockCard: React.FC<Props> = ({ stock }) => {
  const { data } = useSWR(stock.ticker, getQuote);
  const price = data?.c ?? stock.price;
  const dailyChangePct = data && data.pc ? ((data.c - data.pc) / data.pc) * 100 : stock.dailyChange;
  const changeColor = dailyChangePct >= 0 ? 'text-green-600' : 'text-red-600';

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-80">
      <div className="flex justify-between items-baseline">
        <h2 className="text-xl font-bold">{stock.ticker}</h2>
        <span className={`text-sm ${changeColor}`}>
          {dailyChangePct >= 0 ? '+' : ''}
          {dailyChangePct.toFixed(2)}%
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{stock.name}</p>
      <p className="text-lg font-semibold mb-4">${price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{stock.bio}</p>
      <div className="flex flex-wrap gap-2">
        {stock.tags.map(tag => (
          <span
            key={tag}
            className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StockCard;
