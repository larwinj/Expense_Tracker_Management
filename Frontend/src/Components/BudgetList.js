import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Container, Paper, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CanIdContext } from '../context/CanIdContext';

const BudgetList = ({ budgets }) => {
    const [budgetList, setBudgetList] = useState([]);
    const { CanId } = useContext(CanIdContext);

    useEffect(() => {
        if (budgets.length === 0) {
            axios.get(`http://localhost:8080/api/budgets/user/${parseInt(CanId)}`)
                .then(response => setBudgetList(response.data))
                .catch(error => console.error('Error fetching budgets:', error));
        } else {
            setBudgetList(budgets);
        }
    }, [budgets, CanId]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/budgets/${id}`)
            .then(() => setBudgetList(budgetList.filter(budget => budget.budgetId !== id)))
            .catch(error => console.error('Error deleting budget:', error));
    };

    const getCategoryName = (categoryId) => {
        switch (categoryId) {
            case 1:
                return 'Groceries';
            case 2:
                return 'Rent';
            case 3:
                return 'Food';
            case 4:
                return 'Transport';
            default:
                return 'Unknown';
        }
    };

    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
                <Typography variant="h5" gutterBottom align="center">
                    Budgets
                </Typography>
                <Box>
                    <List>
                        {budgetList.map(budget => (
                            <ListItem key={budget.budgetId} divider>
                                <ListItemText
                                    primary={`Category: ${getCategoryName(budget.category.categoryId)}`}
                                    secondary={`Budget: $${budget.budgetAmount} | Start: ${budget.startDate} | End: ${budget.endDate}`}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" onClick={() => handleDelete(budget.budgetId)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Paper>
        </Container>
    );
};

export default BudgetList;
