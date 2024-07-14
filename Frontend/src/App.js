// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import BudgetsPage from './pages/BudgetsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import AuthProvider from './context/AuthContext'; // Import AuthProvider
import { CanIdProvider } from './context/CanIdContext';

const App = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <CanIdProvider>
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Navbar />
                    <IconButton onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/expenses" element={<ExpensesPage />} />
                        <Route path="/budgets" element={<BudgetsPage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </AuthProvider>
        </CanIdProvider>
    );
};

export default App;
