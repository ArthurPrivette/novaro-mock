import React from 'react';
import Header from '../components/Header';
import SwipeDeck from '../components/SwipeDeck';
import Portfolio from '../components/Portfolio';
import FundingForm from '../components/FundingForm';
import Disclaimer from '../components/Disclaimer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 flex flex-col items-center">
      <Header />
      <SwipeDeck />
      <FundingForm />
      <Portfolio />
      <Disclaimer />
    </div>
  );
};

export default HomePage;
