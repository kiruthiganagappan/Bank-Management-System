const url="http://localhost:8080/accounts";

function createAccount(){

fetch(url,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
    accountHolderName: document.getElementById("name").value,
    accountNumber: document.getElementById("number").value,
    phoneNumber: document.getElementById("phone").value,
    aadharNumber: document.getElementById("aadhar").value,
    email: document.getElementById("email").value,
    balance: document.getElementById("balance").value
})
})
.then(res=>res.json())
.then(data=>{
    alert("Account Created");
    getAccounts();

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("aadhar").value = "";
    document.getElementById("email").value = "";
    document.getElementById("balance").value = "";
});

}

function getAccounts() {

    fetch(url)
    .then(response => response.json())
    .then(data => {

        let table = document.getElementById("tableBody");
        table.innerHTML = "";

        data.forEach(account => {

               let row = `
<tr>
    <td>${account.id}</td>
    <td>${account.accountHolderName}</td>
    <td>${account.accountNumber}</td>
    <td>${account.phoneNumber}</td>
    <td>${account.aadharNumber}</td>
    <td>${account.email}</td>
    <td>${account.balance}</td>

    <td>
        <button class="edit-btn" onclick="editAccount(${account.id})">Edit</button>

        <button class="delete-btn" onclick="deleteAccount(${account.id})">Delete</button>
    </td>
</tr>
`;

            table.innerHTML += row;

        });

    });

}
function deposit(){

let id=document.getElementById("depositId").value;
let amount=document.getElementById("depositAmount").value;

fetch(url+"/"+id+"/deposit/"+amount,{
method:"PUT"
})
.then(res=>res.json())
.then(data=>{
    alert("Deposit Successful");
    getAccounts();

    document.getElementById("depositId").value = "";
    document.getElementById("depositAmount").value = "";
});
}

function withdraw(){

let id=document.getElementById("withdrawId").value;
let amount=document.getElementById("withdrawAmount").value;

fetch(url+"/"+id+"/withdraw/"+amount,{
method:"PUT"
})
.then(res=>res.json())
.then(data=>{
    alert("Withdraw Successful");
    getAccounts();

    document.getElementById("withdrawId").value = "";
    document.getElementById("withdrawAmount").value = "";
});

}
function deleteAccount(id){

    if(confirm("Are you sure to delete this account?")){

        fetch(url+"/"+id,{
            method:"DELETE"
        })
        .then(()=>{
            alert("Account Deleted");
            getAccounts();
        });

    }

}
function editAccount(id){

    let name = prompt("Enter New Name");
    let phone = prompt("Enter New Phone Number");
    let email = prompt("Enter New Email");

    fetch(url+"/"+id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            accountHolderName:name,
            phoneNumber:phone,
            email:email
        })
    })
    .then(res=>res.json())
    .then(data=>{
        alert("Account Updated");
        getAccounts();
    });

}
function logout() {

    alert("Logout clicked");

    if (confirm("Are you sure you want to logout?")) {
        window.location.href = "index.html";
    }
}