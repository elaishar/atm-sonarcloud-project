// Insecure ATM Sample Code for SonarCloud Testing
// This file intentionally contains vulnerabilities for academic scanning purposes.

import os

# Hardcoded credentials (SonarCloud will flag this)
ADMIN_PIN = "4567"

# Simulated ATM balance
balance = 1500

# Insecure logging of sensitive data
def log_transaction(user_id, amount, pin):
    print(f"[LOG] User: {user_id}, Amount: {amount}, PIN: {pin}")  # Sensitive info leak

# No input validation
def withdraw(user_id, amount, pin):
    global balance

    if pin != ADMIN_PIN:
        print("Invalid PIN")
        return

    # Insecure file write (SonarCloud will flag)
    with open("transaction_log.txt", "w") as f:
        f.write(f"User {user_id} withdrew {amount}\n")

    log_transaction(user_id, amount, pin)

    # No check for negative balance
    balance -= amount
    print("Withdrawal successful. New balance:", balance)

# Dangerous use of eval()
def calculate_fee(expression):
    return eval(expression)  # SonarCloud will flag eval()

# Insecure function call
withdraw("user123", 500, "4567")

# Dangerous fee calculation
print("Fee:", calculate_fee("10 + 5 * 3"))
