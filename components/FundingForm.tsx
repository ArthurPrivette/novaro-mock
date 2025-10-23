import React, { useState } from 'react';
import { useAccount } from '../contexts/AccountContext';

const FundingForm: React.FC = () => {
  const { balance, deposit, withdraw } = useAccount();
  const [amount, setAmount] = useState<number>(0);

  return (
    <div className="my-6 w-full max-w-md">
      <h3 className="text-xl font-semibold mb-2">Cash Balance</h3>
      <p className="mb-2">${balance.toFixed(2)}</p>
      <div className="flex gap-2">
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(parseFloat(e.target.value))}
          className="flex-1 border p-2 dark:bg-gray-800 dark:border-gray-700"
          placeholder="Amount"
        />
        <button
          onClick={() => deposit(amount)}
          className="bg-green-500 text-white px-3 py-2 rounded"
        >
          Deposit
        </button>
        <button
          onClick={() => withdraw(amount)}
          className="bg-red-500 text-white px-3 py-2 rounded"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default FundingForm;
