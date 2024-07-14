import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Container, Paper, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CanIdContext } from '../context/CanIdContext';

const ExpenseList = ({ expenses }) => {
    const { CanId } = useContext(CanIdContext);
    const [expenseList, setExpenseList] = useState([]);

    useEffect(() => {
        if (expenses.length === 0) {
            axios.get(`http://localhost:8080/api/expenses/user/${parseInt(CanId)}`)
                .then(response => setExpenseList(response.data))
                .catch(error => console.error('Error fetching expenses:', error));
        } else {
            setExpenseList(expenses);
        }
    }, [expenses, CanId]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/expenses/${id}`)
            .then(() => setExpenseList(expenseList.filter(expense => expense.expenseId !== id)))
            .catch(error => console.error('Error deleting expense:', error));
    };

    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
                <Typography variant="h5" gutterBottom align="center">
                    Expenses
                </Typography>
                <Box>
                    <List>
                        {expenseList.map(expense => (
                            <ListItem key={expense.expenseId} divider>
                                <ListItemText
                                    primary={expense.description}
                                    secondary={`Amount: $${expense.amount} | Date: ${expense.date}`}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" onClick={() => handleDelete(expense.expenseId)}>
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

export default ExpenseList;
