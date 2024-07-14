import React, { useEffect, useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart, ArcElement, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import '../Assests/Dashboard.css'; 

// Register the required components
Chart.register(
    ArcElement,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/expenses').then(res => setExpenses(res.data));
        axios.get('http://localhost:8080/api/budgets').then(res => setBudgets(res.data));
    }, []);

    const expenseData = {
        labels: expenses.map(e => e.category.categoryName),
        datasets: [
            {
                data: expenses.map(e => e.amount),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    const budgetData = {
        labels: budgets.map(b => b.category.categoryName),
        datasets: [
            {
                data: budgets.map(b => b.budgetAmount),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Example',
            },
        },
    };

    return (
        <div className="dashboard-container">
            <div className="chart-wrapper">
                <h2>Expense Distribution</h2>
                <div className="chart-container">
                    <Doughnut data={expenseData} options={chartOptions} />
                </div>
            </div>
            <div className="chart-wrapper">
                <h2>Budget Distribution</h2>
                <div className="chart-container">
                    <Line data={budgetData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
