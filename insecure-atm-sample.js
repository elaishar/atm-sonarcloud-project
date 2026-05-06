// Insecure ATM Sample Code for SonarCloud Testing
// This file intentionally contains vulnerabilities for academic scanning purposes.

// Hardcoded credentials (SonarCloud will flag this)
const ADMIN_PIN = "4567";

// Simulated ATM balance
let balance = 1000;

// Insecure logging of sensitive data
function logTransaction(userId, amount, pin) {
    console.log("User:", userId, "Amount:", amount, "PIN:", pin); // Sensitive info leak
}

// Dangerous use of eval()
function calculateFee(expression) {
    return eval(expression); // SonarCloud will flag eval()
}

// No input validation
function withdraw(userId, amount, pin) {
    if (pin !== ADMIN_PIN) {
        console.log("Invalid PIN");
        return;
    }

    // Insecure direct file write (SonarCloud will flag)
    const fs = require("fs");
    fs.writeFileSync("transaction_log.txt", `User ${userId} withdrew ${amount}`);

    logTransaction(userId, amount, pin);

    balance -= amount;
    console.log("Withdrawal successful. New balance:", balance);
}

// Insecure function call
withdraw("user001", 300, "4567");

// Dangerous fee calculation
console.log("Fee:", calculateFee("10 + 5 * 2"));
