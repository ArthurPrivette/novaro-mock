// components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="p-2 rounded border dark:border-gray-600"
      title="Toggle dark mode"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
