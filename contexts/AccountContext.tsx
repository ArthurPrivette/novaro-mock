// contexts/AccountContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Stock } from '../types/Stock';

interface Holding {
  quantity: number;
  avgPrice: number;
}

interface AccountState {
  balance: number;
  portfolio: Record<string, Holding>;
  liked: Stock[];
  deposit: (amt: number) => void;
  withdraw: (amt: number) => void;
  invest: (stock: Stock, price: number) => void;
  pass: (stock: Stock) => void;
}

const AccountContext = createContext<AccountState | undefined>(undefined);

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [balance, setBalance] = useState<number>(10000);
  const [portfolio, setPortfolio] = useState<Record<string, Holding>>({});
  const [liked, setLiked] = useState<Stock[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('novaro-account');
    if (stored) {
      const { balance, portfolio, liked } = JSON.parse(stored);
      setBalance(balance);
      setPortfolio(portfolio);
      setLiked(liked);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      'novaro-account',
      JSON.stringify({ balance, portfolio, liked })
    );
  }, [balance, portfolio, liked]);

  const deposit = (amt: number) => setBalance(b => b + Math.max(0, amt));
  const withdraw = (amt: number) => setBalance(b => Math.max(0, b - Math.max(0, amt)));
  const invest = (stock: Stock, price: number) => {
    if (balance < price) return;
    setBalance(b => b - price);
    setPortfolio(p => {
      const existing = p[stock.ticker] ?? { quantity: 0, avgPrice: 0 };
      const newQty = existing.quantity + 1;
      const newAvg = (existing.avgPrice * existing.quantity + price) / newQty;
      return { ...p, [stock.ticker]: { quantity: newQty, avgPrice: newAvg } };
    });
    setLiked(prev => [...prev, stock]);
  };
  const pass = (stock: Stock) => {
    // track passes if desired
  };

  return (
    <AccountContext.Provider value={{ balance, portfolio, liked, deposit, withdraw, invest, pass }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error('useAccount must be used within AccountProvider');
  return ctx;
};
