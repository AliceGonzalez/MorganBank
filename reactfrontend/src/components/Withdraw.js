import React, { useState } from 'react';
import '../styles/withdraw.css'; // Ensure you have corresponding styles for Withdraw

function Withdraw({ onClose }) {
  // Static account balances
  const [accounts] = useState({
    checking: { balance: 1000, id: 1 }, // Example balance for checking account
    savings: { balance: 500, id: 2 },   // Example balance for savings account
    moneyMarket: { balance: 1500, id: 3 }, // Example balance for money market account
  });

  const [accountType, setAccountType] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Withdraw from ${accountType} amount ${amount}`);
    
    // Here you can add logic to handle the withdrawal
    if (accountType) {
      const account = accounts[accountType];
      if (account) {
        // Simulate a withdrawal action
        console.log(`Withdrawing ${amount} from ${accountType} account with balance ${account.balance}`);
        // You can add logic to update the balance if needed
      } else {
        console.error('Unexpected error');
      }
    }
    onClose(); // Close the modal after submitting
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label>
            Account Type:
            <select value={accountType} onChange={e => setAccountType(e.target.value)}>
              <option value="">Select Account</option>
              <option value="checking">Checking (${accounts.checking.balance})</option>
              <option value="savings">Savings (${accounts.savings.balance})</option>
              <option value="moneyMarket">Money Market (${accounts.moneyMarket.balance})</option>
            </select>
          </label>
          <label>
            Amount:
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
          </label>
          <button type="submit">Submit Transaction</button>
        </form>
      </div>
    </div>
  );
}

export default Withdraw;// import React, { useEffect, useState } from 'react';
// import '../styles/withdraw.css';
// import { getAccounts, makeTransaction } from '../utils/accUtils'; // Ensure you have corresponding styles for Withdraw

// function Withdraw({ onClose }) {
//   const [accounts, setAccounts] = useState({
//     checking: { balance: 0, id: 0 },
//     savings: { balance: 0, id: 0 },
//     moneyMarket: { balance: 0, id: 0 },
//   });

//   useEffect(() => {
//     getAccounts().then(res => {
//       setAccounts({
//         checking: res[1],
//         savings: res[2],
//         moneyMarket: res[0],
//       });
//       setBalances({
//         checking: accounts.checking.balance,
//         savings: accounts.savings.balance,
//         moneyMarket: accounts.moneyMarket.balance,
//       });
//     });
//   });
//   const [accountType, setAccountType] = useState('');
//   const [amount, setAmount] = useState('');
//   const [balances, setBalances] = useState({
//     checking: 0, // Example balance for checking account
//     savings: 0, // Example balance for savings account
//     moneyMarket: 0, // Example balance for money market account
//   });

//   // Example balances for accounts
//   // const accountBalances = {
//   //   checking: 1000, // balance in checking account
//   //   savings: 500, // balance in savings account
//   //   moneyMarket: 1500, // balance in money market account
//   // };

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(`Withdraw from ${accountType} amount ${amount}`);
//     if (accountType === 'checking') {
//       let account = accounts.checking;
//       makeTransaction('withdrawal', { source: account, destination: null, amount: amount }).then(res => console.log(res));
//     } else if (accountType === 'savings') {
//       let account = accounts.savings;
//       makeTransaction('withdrawal', { source: account, destination: null, amount: amount }).then(res => console.log(res));
//     } else if (accountType === 'moneyMarket') {
//       let account = accounts.moneyMarket;
//       makeTransaction('withdrawal', { source: account, destination: null, amount: amount }).then(res => console.log(res));
//     } else {
//       console.error('Unexpected error');
//     }
//     onClose(); // Close the modal after submitting
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Account Type:
//             <select value={accountType} onChange={e => setAccountType(e.target.value)}>
//               <option value="">Select Account</option>
//               <option value="checking">Checking (${balances.checking})</option>
//               <option value="savings">Savings (${balances.savings})</option>
//               <option value="moneyMarket">Money Market (${balances.moneyMarket})</option>
//             </select>
//           </label>
//           <label>
//             Amount:
//             <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
//           </label>
//           <button type="submit">Submit Transaction</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Withdraw;
