// Mock Data Storage
let users = [
    { id: 1, username: 'User1', balance: 1000, transactions: [], gainsLosses: [] },
    { id: 2, username: 'User2', balance: 500, transactions: [], gainsLosses: [] },
    // Add more users as needed
  ];
  
  // Load Users into Select Elements
  function loadUsers() {
    const userSelect = document.getElementById('user-select');
    const activityUserSelect = document.getElementById('activity-user-select');
  
    users.forEach(user => {
      const option = document.createElement('option');
      option.value = user.id;
      option.textContent = user.username;
      userSelect.appendChild(option);
  
      const activityOption = document.createElement('option');
      activityOption.value = user.id;
      activityOption.textContent = user.username;
      activityUserSelect.appendChild(activityOption);
    });
  }
  
  // Balance Form Submission
  document.getElementById('balance-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const userId = parseInt(document.getElementById('user-select').value);
    const amount = parseFloat(document.getElementById('balance-amount').value);
    const action = document.getElementById('balance-action').value;
  
    const user = users.find(u => u.id === userId);
    if (user) {
      const originalBalance = user.balance;
      if (action === 'add') {
        user.balance += amount;
      } else if (action === 'remove') {
        user.balance -= amount;
      }
      
      user.transactions.push({
        date: new Date().toLocaleString(),
        type: action,
        amount: amount,
        balance: user.balance
      });
  
      alert(`${action === 'add' ? 'Added' : 'Removed'} $${amount} to/from ${user.username}. New balance: $${user.balance}`);
    }
  });
  
  // View User Activity
  document.getElementById('view-activity').addEventListener('click', function() {
    const userId = parseInt(document.getElementById('activity-user-select').value);
    const user = users.find(u => u.id === userId);
  
    if (user) {
      document.getElementById('user-activity').style.display = 'block';
  
      // Load Transaction History
      const transactionHistory = document.getElementById('transaction-history').querySelector('tbody');
      transactionHistory.innerHTML = '';
      user.transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${transaction.date}</td>
          <td>${transaction.type}</td>
          <td>${transaction.amount}</td>
          <td>${transaction.balance}</td>
        `;
        transactionHistory.appendChild(row);
      });
  
      // Load Gains & Losses History
      const gainLossHistory = document.getElementById('gain-loss-history').querySelector('tbody');
      gainLossHistory.innerHTML = '';
      user.gainsLosses.forEach(gainLoss => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${gainLoss.date}</td>
          <td>${gainLoss.outcome}</td>
          <td>${gainLoss.amount}</td>
        `;
        gainLossHistory.appendChild(row);
      });
    }
  });
  
  // Initial Load
  loadUsers();
  