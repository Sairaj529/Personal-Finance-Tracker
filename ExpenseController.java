package com.example.personalfinancetracker.controller;

import com.example.personalfinancetracker.model.Expense;
import com.example.personalfinancetracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expenses")
public class ExpenseController {
    @Autowired
    private ExpenseService expenseService;

    @GetMapping("/{userId}")
    public List<Expense> getExpensesByUserId(@PathVariable Long userId) {
        return expenseService.getAllExpensesByUserId(userId);
    }

    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        return expenseService.saveExpense(expense);
    }
}
