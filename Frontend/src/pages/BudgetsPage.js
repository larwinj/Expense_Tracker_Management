import React, { useState } from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';
import BudgetForm from '../Components/BudgetForm';
import BudgetList from '../Components/BudgetList';

const BudgetsPage = () => {
    const [budgets, setBudgets] = useState([]);

    const addBudget = (budget) => {
        setBudgets([...budgets, budget]);
    };

    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Manage Budgets
                </Typography>
                <Box sx={{ marginBottom: 4 }}>
                    <BudgetForm onAdd={addBudget} />
                </Box>
                <BudgetList budgets={budgets} />
            </Paper>
        </Container>
    );
}

export default BudgetsPage;
