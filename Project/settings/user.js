// Personal Information Form Submission
document.getElementById('personal-info-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Implement AJAX call to update personal information
    alert('Personal information updated successfully!');
  });
  
  // Change Password Form Submission
  document.getElementById('change-password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
  
    // Implement AJAX call to change password
    alert('Password changed successfully!');
  });
  
  // Notification Preferences Form Submission
  document.getElementById('notification-preferences-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Implement AJAX call to update notification preferences
    alert('Notification preferences updated!');
  });
  
  // Remove Payment Method
  document.querySelectorAll('.remove-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      const paymentMethod = this.parentElement;
      paymentMethod.parentElement.removeChild(paymentMethod);
      // Implement AJAX call to remove payment method
      alert('Payment method removed.');
    });
  });
  
  // Add Payment Method (Simple Simulation)
  document.getElementById('add-payment-method-btn').addEventListener('click', function() {
    const paymentMethodsDiv = document.getElementById('payment-methods');
  
    const newPaymentMethod = document.createElement('div');
    newPaymentMethod.className = 'payment-method';
  
    const icon = document.createElement('i');
    icon.className = 'fab fa-cc-amex';
    icon.style.fontSize = '24px';
    icon.style.marginRight = '10px';
  
    const span = document.createElement('span');
    span.textContent = 'American Express ending in 9012';
  
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
      paymentMethodsDiv.removeChild(newPaymentMethod);
      alert('Payment method removed.');
    });
  
    newPaymentMethod.appendChild(icon);
    newPaymentMethod.appendChild(span);
    newPaymentMethod.appendChild(removeBtn);
  
    paymentMethodsDiv.appendChild(newPaymentMethod);
  
    // Implement AJAX call to add payment method
    alert('Payment method added.');
  });
  

  // Quick Stake Form Submission
document.getElementById('quick-stake-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const selectedStake = document.querySelector('input[name="quick-stake"]:checked');
    
    if (selectedStake) {
      const stakeAmount = selectedStake.value;
      // Implement AJAX call to save quick stake amount
      alert(`Quick stake amount of $${stakeAmount} saved successfully!`);
    } else {
      alert('Please select a quick stake amount.');
    }
  });
  
  // Existing form handlers unchanged
  