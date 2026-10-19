package com.example.bankmgmt.repository;

import com.example.bankmgmt.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {

    // Customer Login
    Account findByAccountNumberAndPhoneNumber(String accountNumber, String phoneNumber);

}