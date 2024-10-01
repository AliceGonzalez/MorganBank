import React from 'react';
import '../styles/accounts.css';
import { useNavigate } from 'react-router-dom';

function AccountBalances() {
  const navigate = useNavigate();

  // Navigation functions for each account type
  const goToChecking = () => {
    navigate('/checking');
  };

  const goToSavings = () => {
    navigate('/saving');
  };

  const goToMoneyMarket = () => {
    navigate('/moneymarket'); // Assuming you have a route for Money Market Account
  };

  const accounts = {
    checking: {
      balance: 1500,
      onClick: goToChecking,
    },
    savings: {
      balance: 3000,
      onClick: goToSavings,
    },
    market: {
      balance: 5000,
      onClick: goToMoneyMarket,
    },
  };

  return (
    <div className="outer-div">
      <div className="content-div"></div>
      <div className="accounts-container">
        {Object.entries(accounts).map(([key, { balance, onClick }]) => (
          <div key={key} className="account-card">
            <h2>{key.charAt(0).toUpperCase() + key.slice(1)} Account</h2>
            <p>Balance: ${balance}</p>
            <button className="account-button" onClick={onClick}>
              View Transactions
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountBalances;
