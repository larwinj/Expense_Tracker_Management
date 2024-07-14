// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // const history = useNavigate();

    const handleRegister = (e) => {
        // e.preventDefault();
        // axios.post('/api/users', { username, passwordHash: password, email })
        //     .then(() => history.push('/login'))
        //     .catch(err => alert('Registration failed'));
    };

    return (
        <form onSubmit={handleRegister}>
            <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth />
            <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
            <Button type="submit" variant="contained" color="primary">Register</Button>
        </form>
    );
}

export default RegisterPage;
