
import CounterComponent from "./CounterComponent.js";
import { useState } from "react";

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
      Array : [ {arr.toString()}]
      <br />

      name : [ {name}]
      <br />

      <input placeholder="Enter name" onChange={handleChange} type="text" />
      <button onClick={handleAdd} > Add Counter</button >
      <br />
      <br />
      <br />
      {arr.map((e) => {
        return <CounterComponent name={e} />
      }
      )}

    </div>
  );
}

export default App;
