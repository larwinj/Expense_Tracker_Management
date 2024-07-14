// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Expense Tracker
                </Typography>
                <Button color="inherit" component={Link} to="/home">Home</Button>
                <Button color="inherit" component={Link} to="/expenses">Expenses</Button>
                <Button color="inherit" component={Link} to="/budgets">Budgets</Button>
                <Button color="inherit" component={Link} to="/analytics">Analytics</Button>
                <Button color="inherit" component={Link} to="/">Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
