const url = "http://localhost:8080/accounts";

// Show / Hide Password
const togglePassword = document.getElementById("togglePassword");

if (togglePassword) {

    togglePassword.onclick = function () {

        const password = document.getElementById("password");

        if (password.type === "password") {

            password.type = "text";
            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");

        } else {

            password.type = "password";
            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");

        }

    }

}

// ======================
// Admin Login
// ======================

function adminLogin() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please enter Username and Password");
        return;
    }

    fetch(`${url}/admin/login?username=${username}&password=${password}`)
    .then(res => res.text())
    .then(data => {

        console.log("Response =", data);

        if (data === "true") {

            alert("Login Success");

            window.location.href = "admin-dashboard.html";

        } else {

            alert("Invalid Username or Password");

        }

    })
    .catch(err => {
        console.log(err);
        alert("Server Error");
    });

}

// ======================
// Customer Login
// ======================


function customerLogin() {
    const accountNumber = document.getElementById("accountNumber").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();

    if (accountNumber === "" || phoneNumber === "") {
        alert("Please enter Account Number and Phone Number");
        return;
    }

    const loginUrl =
        `${url}/customer/login?accountNumber=${encodeURIComponent(accountNumber)}&phoneNumber=${encodeURIComponent(phoneNumber)}`;

    fetch(loginUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Server returned status: " + response.status);
            }
            return response.json();
        })
        .then(account => {
            console.log("Customer login response:", account);

            if (account && account.id != null) {
                localStorage.setItem("customer", JSON.stringify(account));
                window.location.href = "customer-dashboard.html";
            } else {
                alert("Invalid Account Number or Phone Number");
            }
        })
        .catch(error => {
            console.error("Customer login error:", error);
            alert("Login failed. Check the browser Console and Spring Boot terminal.");
        });
}
