import { createContext, useState, useEffect } from 'react';

const IdContext = createContext({});
export const IdProvider = ({ children }) => {
    const [matrimonyProfileId, setMatrimonyProfileId] = useState(() => {
        return localStorage.getItem('MatrimonyProfileId') || null;
    });
    const [userId, setUserId] = useState(() => {
        return localStorage.getItem('userId') || null;
    });

    useEffect(() => {
        if (matrimonyProfileId) {
            localStorage.setItem('MatrimonyProfileId', matrimonyProfileId);
        }
    }, [matrimonyProfileId]);

    useEffect(() => {
        if (userId) {
            localStorage.setItem('userId', userId);
        }
    }, [userId]);

    return (
        <IdContext.Provider value={{ matrimonyProfileId, setMatrimonyProfileId, userId, setUserId }}>
            {children}
        </IdContext.Provider>
    );
};

export default IdContext;
