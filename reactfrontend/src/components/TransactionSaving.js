import React, { useState } from 'react';
import '../styles/transactiontable.css';
import Deposit from './Deposit.js';
import Withdraw from './Withdraw.js';
import Transfer from './Transfer.js';

// Static transaction data
const staticTransactions = [
  {
    transactionDate: '2023-10-01',
    description: 'Deposit from Employer',
    transactionValue: '$1,000',
  },
  {
    transactionDate: '2023-10-05',
    description: 'Withdrawal for Rent',
    transactionValue: '$800',
  },
  {
    transactionDate: '2023-10-10',
    description: 'Transfer to Savings',
    transactionValue: '$200',
  },
  // Add more static transactions as needed
];

function TransactionSaving() {
  const [activeModal, setActiveModal] = useState('');

  const handleOpenModal = modalType => {
    setActiveModal(modalType);
  };

  const handleCloseModal = () => {
    setActiveModal('');
    window.location.reload();
  };

  return (
    <div className="transaction-container">
      <div className="button-container">
        <button onClick={() => handleOpenModal('deposit')}>Deposit</button>
        <button onClick={() => handleOpenModal('withdrawal')}>Withdrawal</button>
        <button onClick={() => handleOpenModal('transfer')}>Transfer</button>
      </div>
      <div className="transaction-table-container">
        {activeModal === 'deposit' && <Deposit onClose={handleCloseModal} />}
        {activeModal === 'withdrawal' && <Withdraw onClose={handleCloseModal} />}
        {activeModal === 'transfer' && <Transfer onClose={handleCloseModal} />}
        <table className="GeneratedTable">
          <thead>
            <tr>
              <th className="date-column">Date</th>
              <th className="description-column">Description</th>
              <th className="amount-column">Amount</th>
            </tr>
          </thead>
          <tbody>
            {staticTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.transactionDate}</td>
                <td>{transaction.description}</td>
                <td>{transaction.transactionValue}</td>
              </tr>
            ))}
            {/* More rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionSaving;

// import React, { useEffect, useState } from 'react';
// import '../styles/transactiontable.css';
// import Deposit from './Deposit.js';
// import Withdraw from './Withdraw.js';
// import Transfer from './Transfer.js';
// import { getTransactions } from '../utils/accUtils';
// import { getAccounts } from '../utils/accUtils';

// function TransactionSaving() {
//   const [activeModal, setActiveModal] = useState('');
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     // Fetch transaction history when component mounts
//     const fetchTransactions = async () => {
//       try {
//         const account = await getAccounts();
//         const idToken = account[2].id;
//         const transactionsData = await getTransactions(idToken);
//         setTransactions(transactionsData);
//       } catch (error) {
//         console.error('Error fetching transactions:', error);
//       }
//     };

//     fetchTransactions();
//   }, []);

//   const handleOpenModal = modalType => {
//     setActiveModal(modalType);
//   };

//   const handleCloseModal = () => {
//     setActiveModal('');
//     window.location.reload();
//   };

//   return (
//     <div className="transaction-container">
//       <div className="button-container">
//         <button onClick={() => handleOpenModal('deposit')}>Deposit</button>
//         <button onClick={() => handleOpenModal('withdrawal')}>Withdrawal</button>
//         <button onClick={() => handleOpenModal('transfer')}>Transfer</button>
//       </div>
//       <div className="transaction-table-container">
//         {activeModal === 'deposit' && <Deposit onClose={handleCloseModal} />}
//         {activeModal === 'withdrawal' && <Withdraw onClose={handleCloseModal} />}
//         {activeModal === 'transfer' && <Transfer onClose={handleCloseModal} />}
//         <table className="GeneratedTable">
//           <thead>
//             <tr>
//               <th className="date-column">Date</th>
//               <th className="description-column">Description</th>
//               <th className="amount-column">Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((transaction, index) => (
//               <tr key={index}>
//                 <td>{transaction.transactionDate}</td>
//                 <td>{transaction.description}</td>
//                 <td>{transaction.transactionValue}</td>
//               </tr>
//             ))}
//             {/* More rows */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default TransactionSaving;
