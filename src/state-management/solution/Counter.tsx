import React, { createContext, useState, useContext } from 'react';

// Step 1: Create the CounterContext with correct type for setCount
const CounterContext = createContext<{
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}>({
    count: 0,
    setCount: () => { },
});

// Step 2: Implement the App Component
const Solution = () => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            <div>
                <CounterDisplay />
                <CounterControls />
            </div>
        </CounterContext.Provider>
    );
};

// Step 3: Implement the CounterControls Component
const CounterControls = () => {
    const { count, setCount } = useContext(CounterContext);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

// Step 4: Implement the CounterDisplay Component
const CounterDisplay = () => {
    const { count } = useContext(CounterContext);

    return <div>Current Count: {count}</div>;
};

// Export the App component as default
export default Solution;
