// Quick Stake Settings Form Submission
document.getElementById('admin-quick-stake-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const stakeAmounts = [];
    for (let i = 1; i <= 4; i++) {
      const stakeValue = document.getElementById(`admin-stake-${i}`).value;
      if (stakeValue) {
        stakeAmounts.push(Number(stakeValue));
      } else {
        alert(`Please enter a valid amount for Amount ${i}`);
        return;
      }
    }
  
    // Implement AJAX call to save these quick stake amounts to the backend
    console.log('Quick stake amounts saved:', stakeAmounts);
    alert('Quick stake amounts saved successfully!');
  });
  

// Mock Data Storage (this would be a database in a real application)
let users = [];

// Create User Form Submission
document.getElementById('create-user-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const role = document.getElementById('role').value;
  const password = document.getElementById('password').value;

  const newUser = { username, role, password };
  users.push(newUser);

  alert(`User ${username} created as ${role}!`);
  document.getElementById('create-user-form').reset();

  updateUserList();
});

// Update User List Display
function updateUserList() {
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';

  users.forEach((user, index) => {
    const userRow = document.createElement('tr');

    const usernameCell = document.createElement('td');
    usernameCell.textContent = user.username;
    userRow.appendChild(usernameCell);

    const roleCell = document.createElement('td');
    roleCell.textContent = user.role;
    userRow.appendChild(roleCell);

    const actionsCell = document.createElement('td');
    actionsCell.classList.add('actions');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteUser(index));
    actionsCell.appendChild(deleteButton);

    userRow.appendChild(actionsCell);
    userList.appendChild(userRow);
  });
}

// Delete User
function deleteUser(index) {
  const confirmed = confirm('Are you sure you want to delete this user?');
  if (confirmed) {
    users.splice(index, 1);
    updateUserList();
  }
}
