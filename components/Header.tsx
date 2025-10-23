// components/Header.tsx
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Novaro</h1>
      <div className="flex items-center gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Finance, simplified through design and intelligence.
        </p>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
