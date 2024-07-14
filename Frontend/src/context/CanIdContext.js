// src/context/CanIdContext.js
import React, { createContext, useState } from 'react';

export const CanIdContext = createContext();

export const CanIdProvider = ({ children }) => {
    const [CanId, setCanId] = useState('');
    const [Cusname, setCusname] = useState(''); // Add username state

    return (
        <CanIdContext.Provider value={{ CanId, setCanId, Cusname, setCusname }}>
            {children}
        </CanIdContext.Provider>
    );
};
