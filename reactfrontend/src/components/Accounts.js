import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faPiggyBank, faLandmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/accounts.css';
import CreditCard from '../images/CreditCard.png';

function Accounts() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Static account data
  const accountList = {
    checking: {
      icon: <FontAwesomeIcon icon={faWallet} />,
      balance: '$1,500',
      onClick: () => navigate('/checking'), // Navigate to checking account
    },
    savings: {
      icon: <FontAwesomeIcon icon={faPiggyBank} />,
      balance: '$3,000',
      onClick: () => navigate('/saving'), // Navigate to savings account
    },
    market: {
      icon: <FontAwesomeIcon icon={faLandmark} />,
      balance: '$5,000',
      onClick: () => navigate('/moneymarket'), // Navigate to market account
    },
  };

  return (
    <div className="outer-div"> 
      <div className="content-div">
        <img src={CreditCard} alt="Credit Card" className="credit-card-img" />
        <p className="welcome">Welcome to your account dashboard!</p>
        <p>
          Here, you can manage all your banking needs in one convenient place. Simply select the account you wish to view.
        </p>
      </div>
      <div className="accounts-container">
        {Object.entries(accountList).map(([key, { icon, balance, onClick }]) => (
          <div key={key} className="account-card">
            {icon}
            <h2>{key.charAt(0).toUpperCase() + key.slice(1)} Account</h2>
            <p>Balance: {balance}</p>
            <button className="cs-button-solid" onClick={onClick}>
              View Transactions
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accounts;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWallet, faPiggyBank, faLandmark } from '@fortawesome/free-solid-svg-icons';
// import '../styles/accounts.css'; // Make sure this includes .cs-button-solid or import the specific CSS file
// import { getAccounts } from '../utils/accUtils';

// function Accounts() {
//   const navigate = useNavigate();

//   // Helper function to format numbers as currency
//   const formatCurrency = value => {
//     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
//   };

//   const [accountList, setAccountList] = useState({
//     checking: {
//       icon: <FontAwesomeIcon icon={faWallet} />,
//       balance: formatCurrency(1500),
//       onClick: () => navigate('/checking'),
//     },
//     savings: {
//       icon: <FontAwesomeIcon icon={faPiggyBank} />,
//       balance: formatCurrency(3000),
//       onClick: () => navigate('/saving'),
//     },
//     market: {
//       icon: <FontAwesomeIcon icon={faLandmark} />,
//       balance: formatCurrency(5000),
//       onClick: () => navigate('/moneymarket'),
//     },
//   });

//   const [accountHolder, setAccountHolder] = useState('');

//   useEffect(() => {
//     getAccounts().then(res => {
//       if (res) {
//         setAccountHolder(res[0].accountHolder.firstName);
//         setAccountList({
//           checking: {
//             icon: <FontAwesomeIcon icon={faWallet} />,
//             balance: formatCurrency(res[1].balance),
//             onClick: () => navigate('/checking'),
//           },
//           savings: {
//             icon: <FontAwesomeIcon icon={faPiggyBank} />,
//             balance: formatCurrency(res[2].balance),
//             onClick: () => navigate('/saving'),
//           },
//           market: {
//             icon: <FontAwesomeIcon icon={faLandmark} />,
//             balance: formatCurrency(res[0].balance),
//             onClick: () => navigate('/moneymarket'),
//           },
//         });
//       }
//     });
//   }, []);

//   return (
//     <div className="outer-div">
//       <div className="content-div">
//         <p className="welcome">Welcome to your account dashboard, {accountHolder}!</p>
//         <p>
//           Here, you can manage all your banking needs in one convenient place. Simply select the account you wish to view, and click "View
//           Transactions" to see all recent activity and manage your finances effectively.
//         </p>
//       </div>
//       <div className="accounts-container">
//         {Object.entries(accountList).map(([key, { icon, balance, onClick }]) => (
//           <div key={key} className="account-card">
//             {icon}
//             <h2>{key.charAt(0).toUpperCase() + key.slice(1)} Account</h2>
//             <p>Balance: {balance}</p>
//             <button className="cs-button-solid" onClick={onClick}>
//               View Transactions
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Accounts;
