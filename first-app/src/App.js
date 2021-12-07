
import CounterComponent from "./CounterComponent.js";
import Test from "./Test.js";
import { useState } from "react";
import './App.css';
import Button from "./Button.js";

function App() {
  const [arr, setArr] = useState([]);
  const [name, setName] = useState([]);

  const handleAdd = () => {
    let newArr = [...arr, name];
    setArr(newArr);
    console.log("Arr", arr);
  }

  const handleChange = (e) => {
    setName(e.target.value)
  };

  const mapper = (e) => {
    return <CounterComponent name={e} />
  }

  return (
    <div className="App">
      <div className="headdiv">
        <input placeholder="Enter name" onChange={handleChange} type="text" />
        <button className="addbtn" onClick={handleAdd} > Add Counter</button >
      </div>

      <div className="bodydiv">
        {
          arr.map(mapper)
        }
      </div>
    </div>
  );
}

export default App;
