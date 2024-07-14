package com.expensetracker.expensetrackerapplication.repository;

import com.expensetracker.expensetrackerapplication.model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long> {
    
    List<Budget> findByUserUserId(Long userId);
    List<Budget> findByCategoryCategoryId(Long categoryId);
}
