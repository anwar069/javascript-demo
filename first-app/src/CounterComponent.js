
import { useState } from "react";

function CounterComponent(prop) {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(count + 1);
    }

    const handleMinus = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div>
            <span>{prop.name + ' : '}</span>
            <button onClick={handleMinus}> -</button >
            <span>{'  ' + count + '  '} </span>
            <button onClick={handlePlus}> +</button >
            <button onClick={handleReset}> Reset </button >
            <br />
            <br />
        </div>
    );
}

export default CounterComponent;
