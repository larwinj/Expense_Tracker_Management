package com.expensetracker.expensetrackerapplication.service;

import com.expensetracker.expensetrackerapplication.model.User;
import com.expensetracker.expensetrackerapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long userId) {
        return userRepository.findById(userId);
    }

    // public User getUserByUsername(String username) {
    //     return userRepository.findByUsername(username);
    // }

    public Optional<User> authenticateUser(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    public Optional<User> getidbyname(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        // return user.get().getUserId();
        return user;
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
