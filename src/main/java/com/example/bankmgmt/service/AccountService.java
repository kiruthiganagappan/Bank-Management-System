package com.example.bankmgmt.service;

import com.example.bankmgmt.model.Account;
import com.example.bankmgmt.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    @Autowired
    private AccountRepository repository;

    // Create Account
    public Account createAccount(Account account) {
        return repository.save(account);
    }

    // Get All Accounts
    public List<Account> getAllAccounts() {
        return repository.findAll();
    }

    // Deposit
    public Account deposit(Long id, double amount) {

        Account account = repository.findById(id).orElse(null);

        if (account == null) {
            return null;
        }

        account.setBalance(account.getBalance() + amount);

        return repository.save(account);
    }

    // Withdraw
    public Account withdraw(Long id, double amount) {

        Account account = repository.findById(id).orElse(null);

        if (account == null) {
            return null;
        }

        if (account.getBalance() >= amount) {

            account.setBalance(account.getBalance() - amount);

            return repository.save(account);
        }

        return null;
    }

    // Update Account
    public Account updateAccount(Long id, Account newAccount) {

        Account account = repository.findById(id).orElseThrow();

        account.setAccountHolderName(newAccount.getAccountHolderName());
        account.setPhoneNumber(newAccount.getPhoneNumber());
        account.setEmail(newAccount.getEmail());

        return repository.save(account);
    }

    // Delete Account
    public void deleteAccount(Long id) {

        repository.deleteById(id);

    }

    // Customer Login
    public Account customerLogin(String accountNumber, String phoneNumber) {

        return repository.findByAccountNumberAndPhoneNumber(
                accountNumber,
                phoneNumber
        );
    }

    public Account getAccountById(Long id){
    return repository.findById(id).orElse(null);
   }

}