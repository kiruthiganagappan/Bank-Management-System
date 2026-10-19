package com.example.bankmgmt.controller;

import com.example.bankmgmt.model.Account;
import com.example.bankmgmt.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accounts")
@CrossOrigin("*")
public class AccountController {

    @Autowired
    private AccountService service;

    // Create Account
    @PostMapping
    public Account createAccount(@RequestBody Account account) {
        return service.createAccount(account);
    }

    // Get All Accounts
    @GetMapping
    public List<Account> getAllAccounts() {
        return service.getAllAccounts();
    }

    // Deposit
    @PutMapping("/{id}/deposit/{amount}")
    public Account deposit(@PathVariable Long id,
                           @PathVariable double amount) {

        return service.deposit(id, amount);
    }

    // Withdraw
    @PutMapping("/{id}/withdraw/{amount}")
    public Account withdraw(@PathVariable Long id,
                            @PathVariable double amount) {

        return service.withdraw(id, amount);
    }

    // Update Account
    @PutMapping("/{id}")
    public Account updateAccount(@PathVariable Long id,
                                 @RequestBody Account account) {

        return service.updateAccount(id, account);
    }

    // Delete Account
    @DeleteMapping("/{id}")
    public void deleteAccount(@PathVariable Long id) {

        service.deleteAccount(id);
    }

    // ===========================
    // ADMIN LOGIN
    // Username : admin
    // Password : admin123
    // ===========================

    @GetMapping("/admin/login")
    public boolean adminLogin(@RequestParam String username,
                              @RequestParam String password) {

        return username.equals("admin")
                && password.equals("admin123");
    }

    // ===========================
    // CUSTOMER LOGIN
    // ===========================

    @GetMapping("/customer/login")
    public Account customerLogin(@RequestParam String accountNumber,
                                 @RequestParam String phoneNumber) {

        return service.customerLogin(accountNumber, phoneNumber);
    }
    @GetMapping("/{id}")
    public Account getAccountById(@PathVariable Long id){
    return service.getAccountById(id);
    }

}