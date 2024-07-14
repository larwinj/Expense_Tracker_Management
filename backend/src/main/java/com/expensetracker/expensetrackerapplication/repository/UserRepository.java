package com.expensetracker.expensetrackerapplication.repository;

import com.expensetracker.expensetrackerapplication.model.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    

    Optional<User> findByUsername(String username);
    // User findByUsername(String username);
}
