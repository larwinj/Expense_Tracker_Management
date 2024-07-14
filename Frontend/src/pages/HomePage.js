// src/pages/HomePage.js
import React, { useContext } from 'react';
import Dashboard from '../Components/Dashboard';
import { CanIdContext } from '../context/CanIdContext';

const HomePage = () => {

    const { CanId } = useContext(CanIdContext);
    const { Cusname } = useContext(CanIdContext);
    // console.log(typeof(parseInt(CanId)));

    return (
        <div>
            <h1>Welcome to Expense Tracker :  {Cusname}</h1>
            <Dashboard />
        </div>
    );
}

export default HomePage;
