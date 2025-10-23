import React from 'react';
import { useAccount } from '../contexts/AccountContext';
import useSWR from 'swr';
import { getQuote } from '../lib/quotes';

const Portfolio: React.FC = () => {
  const { portfolio } = useAccount();
  const tickers = Object.keys(portfolio);

  if (tickers.length === 0) {
    return (
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Your Portfolio</h3>
        <p className="text-gray-500">No holdings yet. Swipe right to invest.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 w-full max-w-md">
      <h3 className="text-xl font-semibold mb-2">Your Portfolio</h3>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {tickers.map(ticker => {
          const { quantity, avgPrice } = portfolio[ticker];
          const { data } = useSWR(ticker, getQuote);
          const currentPrice = data?.c ?? avgPrice;
          const gainLoss = (currentPrice - avgPrice) * quantity;
          return (
            <li key={ticker} className="py-2 flex justify-between">
              <div>
                <span className="font-medium">{ticker}</span> – {quantity} shares @ ${avgPrice.toFixed(2)} avg
              </div>
              <div className={gainLoss >= 0 ? 'text-green-600' : 'text-red-600'}>
                {gainLoss >= 0 ? '+' : ''}
                {gainLoss.toFixed(2)}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Portfolio;
