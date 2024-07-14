import React, { useState, useContext } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Container, Paper, Typography, Box, IconButton } from '@mui/material';
import { Mic } from '@mui/icons-material';
import { CanIdContext } from '../context/CanIdContext';
import axios from 'axios';

const ExpenseForm = ({ onAdd }) => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [date, setDate] = useState('');
    const { CanId } = useContext(CanIdContext);

    const handleSpeechInput = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.start();
        recognition.onresult = (event) => {
            const speechToText = event.results[0][0].transcript;
            setDescription(speechToText);
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const numericCanId = parseInt(CanId, 10);

        axios.post('http://localhost:8080/api/expenses', {
            amount,
            description,
            category: { categoryId },
            date,
            user: { userId: numericCanId }
        }).then(res => {
            onAdd(res.data);
            setAmount('');
            setDescription('');
            setCategoryId('');
            setDate('');
        });
    };

    return (
        <Container component="main" maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
                <Typography variant="h5" gutterBottom align="center">
                    Add New Expense
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        label="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                        <TextField
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <IconButton onClick={handleSpeechInput} sx={{ marginLeft: 2 }}>
                            <Mic />
                        </IconButton>
                    </Box>
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
                        label="Date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Add Expense
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default ExpenseForm;
