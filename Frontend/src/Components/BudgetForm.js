import React, { useState, useContext } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Container, Paper, Typography, Box } from '@mui/material';
import { CanIdContext } from '../context/CanIdContext';
import axios from 'axios';

const BudgetForm = ({ onAdd }) => {
    const [budgetAmount, setBudgetAmount] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const { CanId } = useContext(CanIdContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const numericCanId = parseInt(CanId, 10);

        axios.post('http://localhost:8080/api/budgets', {
            budgetAmount,
            category: { categoryId },
            startDate,
            endDate,
            user: { userId: numericCanId }
        }).then(res => {
            onAdd(res.data);
            setBudgetAmount('');
            setCategoryId('');
            setStartDate('');
            setEndDate('');
        });
    };

    return (
        <Container component="main" maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
                <Typography variant="h5" gutterBottom align="center">
                    Add New Budget
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        label="Budget Amount"
                        value={budgetAmount}
                        onChange={(e) => setBudgetAmount(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Category</InputLabel>
                        <Select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                            <MenuItem value={1}>Groceries</MenuItem>
                            <MenuItem value={2}>Rent</MenuItem>
                            <MenuItem value={3}>Food</MenuItem>
                            <MenuItem value={4}>Transport</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Start Date"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                    />
                    <TextField
                        label="End Date"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Add Budget
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default BudgetForm;
