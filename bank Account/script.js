
// User object to store user details
let user = {
    name: '',
    balance: 0
};

// Function to update balance based on deposit
function deposit() {
    let depositAmount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        user.balance += depositAmount;
        updateBalance();
    } else {
        alert('Please enter a valid deposit amount.');
    }
}

// Function to update balance based on withdrawal
function withdraw() {
    let withdrawalAmount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(withdrawalAmount) && withdrawalAmount > 0 && withdrawalAmount <= user.balance) {
        user.balance -= withdrawalAmount;
        updateBalance();
    } else {
        alert('Invalid withdrawal amount or insufficient balance.');
    }
}

// Function to update the balance display
function updateBalance() {
    document.getElementById('balance').textContent = `Account Balance: $${user.balance.toFixed(2)}`;
}

// Function to set user's name
document.getElementById('username').addEventListener('input', function(event) {
    user.name = event.target.value;
});

// Initialize balance display
updateBalance();
