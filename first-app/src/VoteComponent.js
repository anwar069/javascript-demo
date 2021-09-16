import './App.css';
import { useState } from "react";

function VoteComponent(prop) {
    const [age, setAge] = useState();
    console.log("Properties", prop)

    const handleClick = () => {
        if (age > 18) {
            alert("You can vote");
            console.log("You can vote");
        } else {
            alert("You can't vote");
        }
    }

    const handleChange = (e) => {
        setAge(e.target.value)
    };

    return (
        <div>
            <h1>Hello {prop.name}</h1>
            <h3>Your age is {age}</h3>

            <h4>Please enter your name</h4>
            <input placeholder="Enter Name" type="number"
                onChange={handleChange} />

            <button onClick={handleClick} > Submit</button >
            <h6>Click the button after entering age</h6>
        </div>
    );
}

export default VoteComponent;
