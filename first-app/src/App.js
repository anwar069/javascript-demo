
import CounterComponent from "./CounterComponent.js";
import { useState } from "react";
import './App.css'

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

  return (
    <div className="App">

      <div className="headdiv">
        <input placeholder="Enter name" onChange={handleChange} type="text" />
        <button className="addbtn" onClick={handleAdd} > Add Counter</button >
      </div>

      <div className="bodydiv">
        {
          arr.map((e) => {
            return <CounterComponent name={e} />
          }
          )
        }
      </div>
    </div>
  );
}

export default App;
