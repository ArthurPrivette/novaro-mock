import React, { useState } from 'react';
import { CardSwiper, CardEvent } from 'react-card-swiper';
import StockCard from './StockCard';
import { stocks } from '../data/stocks';
import { Stock } from '../types/Stock';
import { useAccount } from '../contexts/AccountContext';

const SwipeDeck: React.FC = () => {
  const [cards, setCards] = useState<Stock[]>(stocks);
  const { invest, pass } = useAccount();

  const handleDismiss = (e: CardEvent<Stock>) => {
    pass(e.data);
    setCards(prev => prev.filter(c => c.id !== e.data.id));
  };

  const handleLike = (e: CardEvent<Stock>) => {
    invest(e.data, e.data.price);
    setCards(prev => prev.filter(c => c.id !== e.data.id));
  };

  return (
    <CardSwiper
      data={cards}
      onDismiss={handleDismiss}
      onEnter={() => {}}
      onLike={handleLike}
      likeButton={<></>}
      dislikeButton={<></>}
      withActionButtons={false}
      className="flex justify-center"
    >
      {(stock: Stock) => (
        <div className="relative">
          <StockCard stock={stock} />
          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 text-red-600 border border-red-600 rounded"
              onClick={() => handleDismiss({ data: stock } as CardEvent<Stock>)}
            >
              Pass
            </button>
            <button
              className="px-4 py-2 text-green-600 border border-green-600 rounded"
              onClick={() => handleLike({ data: stock } as CardEvent<Stock>)}
            >
              Invest
            </button>
          </div>
        </div>
      )}
    </CardSwiper>
  );
};

export default SwipeDeck;
