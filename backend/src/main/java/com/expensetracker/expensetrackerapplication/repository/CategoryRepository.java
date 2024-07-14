package com.expensetracker.expensetrackerapplication.repository;

import com.expensetracker.expensetrackerapplication.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    
    List<Category> findByUserUserId(Long userId);
}
