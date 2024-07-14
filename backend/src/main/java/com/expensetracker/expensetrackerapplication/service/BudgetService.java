package com.expensetracker.expensetrackerapplication.service;

import com.expensetracker.expensetrackerapplication.model.Budget;
import com.expensetracker.expensetrackerapplication.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    public Budget saveBudget(Budget budget) {
        return budgetRepository.save(budget);
    }

    public List<Budget> getAllBudgets() {
        return budgetRepository.findAll();
    }

    public Optional<Budget> getBudgetById(Long budgetId) {
        return budgetRepository.findById(budgetId);
    }

    public List<Budget> getBudgetsByUserId(Long userId) {
        return budgetRepository.findByUserUserId(userId);
    }

    public List<Budget> getBudgetsByCategoryId(Long categoryId) {
        return budgetRepository.findByCategoryCategoryId(categoryId);
    }

    public void deleteBudget(Long budgetId) {
        budgetRepository.deleteById(budgetId);
    }
}
