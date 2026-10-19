const url = "http://localhost:8080/accounts";

const customer = JSON.parse(localStorage.getItem("customer"));

if (!customer) {
    alert("Please Login First");
    window.location.href = "customer-login.html";
}

// Load latest customer details
function loadCustomer() {

    fetch(url + "/" + customer.id)
    .then(res => res.json())
    .then(data => {

        document.getElementById("customerName").innerHTML =
            "Welcome, " + data.accountHolderName;

        document.getElementById("customerBalance").innerHTML =
            "₹ " + data.balance;

    });

}

loadCustomer();

// Deposit
function deposit(){

    let amount = document.getElementById("depositAmount").value;

    if(amount==""){
        alert("Enter Amount");
        return;
    }

    fetch(url+"/"+customer.id+"/deposit/"+amount,{
        method:"PUT"
    })
    .then(res=>res.json())
    .then(()=>{

        alert("Deposit Successful");

        document.getElementById("depositAmount").value="";

        loadCustomer();

    });

}

// Withdraw
function withdraw(){

    let amount = document.getElementById("withdrawAmount").value;

    if(amount==""){
        alert("Enter Amount");
        return;
    }

    fetch(url+"/"+customer.id+"/withdraw/"+amount,{
        method:"PUT"
    })
    .then(res=>res.json())
    .then(()=>{

        alert("Withdraw Successful");

        document.getElementById("withdrawAmount").value="";

        loadCustomer();

    });

}

// Logout
function logout(){

    localStorage.removeItem("customer");

    window.location.href="index.html";

}