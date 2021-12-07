
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
        <div className="counterDiv">
            <span className="title">{prop.name + ' : '}</span>
            <button className="btnRound btnMinus" onClick={handleMinus}> -</button >
            <span className="count">{count}</span>
            <button className="btnRound btnPlus" onClick={handlePlus}> +</button >
            <button className="btnReset" onClick={handleReset}> Reset </button >
        </div>
    );
}

export default CounterComponent;
