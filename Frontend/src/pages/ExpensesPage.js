import React, { useState } from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';
import ExpenseForm from '../Components/ExpenseForm';
import ExpenseList from '../Components/ExpenseList';

const ExpensesPage = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Manage Expenses
                </Typography>
                <Box sx={{ marginBottom: 4 }}>
                    <ExpenseForm onAdd={addExpense} />
                </Box>
                <ExpenseList expenses={expenses} />
            </Paper>
        </Container>
    );
}

export default ExpensesPage;
