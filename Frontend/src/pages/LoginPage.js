// src/pages/LoginPage.js
import React, { useState, useContext } from 'react';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CanIdContext } from '../context/CanIdContext';
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { CanId, setCanId } = useContext(CanIdContext);
    const { Cusname, setCusname } = useContext(CanIdContext);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', null, {
                params: {
                    username,
                    password
                }
            });

            const user = response.data;
            if (user) {
                setCusname(username);
                console.log('Logged in user:', true);
                navigate('/home');
            } else {
                console.log('Logged in user:', false);
                alert("Invalid user details");
            }
        } catch (error) {
            console.log('Invalid username or password');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
                <Typography component="h1" variant="h5" align="center">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        label="ID"
                        value={CanId}
                        onChange={(e) => setCanId(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        margin="normal"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        margin="normal"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default LoginPage;
