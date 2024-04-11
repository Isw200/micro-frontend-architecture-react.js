import React, { createContext, useContext, useState } from 'react';

const SharedContext = createContext();

export function useSharedContext() {
    return useContext(SharedContext);
}

export function SharedProvider({ children }) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <SharedContext.Provider value={{ count, incrementCount }}>
            {children}
        </SharedContext.Provider>
    );
}