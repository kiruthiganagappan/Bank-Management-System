const url = "http://localhost:8080/accounts";

// Load accounts automatically
window.onload = function () {
    getAccounts();
};

// // Logout
// function logout() {
//     if (confirm("Are you sure you want to logout?")) {
//         window.location.href = "index.html";
//     }
// }
function logout() {

    alert("Logout clicked");

    if (confirm("Are you sure you want to logout?")) {
        window.location.href = "index.html";
    }
}

// Create Account
function createAccount() {

    let name = document.getElementById("name").value.trim();
    let number = document.getElementById("number").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let aadhar = document.getElementById("aadhar").value.trim();
    let email = document.getElementById("email").value.trim();
    let balance = document.getElementById("balance").value.trim();

    if (!name || !number || !phone || !aadhar || !email || !balance) {
        alert("Please fill all fields");
        return;
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            accountHolderName: name,
            accountNumber: number,
            phoneNumber: phone,
            aadharNumber: aadhar,
            email: email,
            balance: balance
        })
    })
    .then(res => res.json())
    .then(() => {

        alert("Account Created Successfully");

        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("aadhar").value = "";
        document.getElementById("email").value = "";
        document.getElementById("balance").value = "";

        getAccounts();
    });
}

// Get Accounts
function getAccounts() {

    fetch(url)
    .then(res => res.json())
    .then(data => {

        let table = document.getElementById("tableBody");
        table.innerHTML = "";

        data.forEach(account => {

            table.innerHTML += `
            <tr>
                <td>${account.id}</td>
                <td>${account.accountHolderName}</td>
                <td>${account.accountNumber}</td>
                <td>${account.phoneNumber}</td>
                <td>${account.aadharNumber}</td>
                <td>${account.email}</td>
                <td>₹${account.balance}</td>

                <td>
                    <button class="edit-btn" onclick="editAccount(${account.id})">Edit</button>

                    <button class="delete-btn" onclick="deleteAccount(${account.id})">Delete</button>
                </td>
            </tr>`;
        });

    });

}

// Deposit
function deposit() {

    let id = document.getElementById("depositId").value;
    let amount = document.getElementById("depositAmount").value;

    if (!id || !amount) {
        alert("Enter Customer ID and Amount");
        return;
    }

    fetch(url + "/" + id + "/deposit/" + amount, {
        method: "PUT"
    })
    .then(res => res.json())
    .then(() => {

        alert("Deposit Successful");

        document.getElementById("depositId").value = "";
        document.getElementById("depositAmount").value = "";

        getAccounts();

    });

}

// Withdraw
function withdraw() {

    let id = document.getElementById("withdrawId").value;
    let amount = document.getElementById("withdrawAmount").value;

    if (!id || !amount) {
        alert("Enter Customer ID and Amount");
        return;
    }

    fetch(url + "/" + id + "/withdraw/" + amount, {
        method: "PUT"
    })
    .then(res => res.json())
    .then(() => {

        alert("Withdraw Successful");

        document.getElementById("withdrawId").value = "";
        document.getElementById("withdrawAmount").value = "";

        getAccounts();

    });

}

// Delete
function deleteAccount(id) {

    if (confirm("Delete this account?")) {

        fetch(url + "/" + id, {
            method: "DELETE"
        })
        .then(() => {

            alert("Account Deleted");

            getAccounts();

        });

    }

}

// Edit
function editAccount(id) {

    let name = prompt("Enter New Name");
    let phone = prompt("Enter New Phone");
    let email = prompt("Enter New Email");

    fetch(url + "/" + id, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            accountHolderName: name,
            phoneNumber: phone,
            email: email

        })

    })

    .then(res => res.json())

    .then(() => {

        alert("Account Updated");

        getAccounts();

    });

}