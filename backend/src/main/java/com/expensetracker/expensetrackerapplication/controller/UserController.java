package com.expensetracker.expensetrackerapplication.controller;

import com.expensetracker.expensetrackerapplication.model.User;
import com.expensetracker.expensetrackerapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.saveUser(user);
        return ResponseEntity.ok(createdUser);
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // @GetMapping("/username/{username}")
    // public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
    //     User user = userService.getUserByUsername(username);
    //     return ResponseEntity.ok(user);
    // }

    @PostMapping("/login")
    public Optional<User> loginUser(@RequestParam String username, @RequestParam String password) {
        Optional<User> user = userService.authenticateUser(username, password);
        // return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(401).build());
        return user;
    }

    @PostMapping("/getidbyname")
    public Optional<User> getbyname(@RequestParam String username) {
        Optional<User> user = userService.getidbyname(username);
        // return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(401).build());
        return user;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
