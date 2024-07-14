package com.expensetracker.expensetrackerapplication.service;

import com.expensetracker.expensetrackerapplication.model.Expense;
import com.expensetracker.expensetrackerapplication.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public Expense saveExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    public Optional<Expense> getExpenseById(Long expenseId) {
        return expenseRepository.findById(expenseId);
    }

    public List<Expense> getExpensesByUserId(Long userId) {
        return expenseRepository.findByUserUserId(userId);
    }

    public List<Expense> getExpensesByCategoryId(Long categoryId) {
        return expenseRepository.findByCategoryCategoryId(categoryId);
    }

    public List<Expense> getExpensesByDateRange(Date startDate, Date endDate) {
        return expenseRepository.findByDateBetween(startDate, endDate);
    }

    public void deleteExpense(Long expenseId) {
        expenseRepository.deleteById(expenseId);
    }
}
