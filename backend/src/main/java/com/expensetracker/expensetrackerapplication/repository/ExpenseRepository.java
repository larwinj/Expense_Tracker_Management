package com.expensetracker.expensetrackerapplication.repository;

import com.expensetracker.expensetrackerapplication.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Date;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    
    
    List<Expense> findByUserUserId(Long userId);
    List<Expense> findByCategoryCategoryId(Long categoryId);
    List<Expense> findByDateBetween(Date startDate, Date endDate);
}
