import { useState } from 'react';
function FunctionalCounter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        setCount(count - 1);
    };
    return (
    <div className="counter-box">
            <h3>Functional Component</h3>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

export default FunctionalCounter;