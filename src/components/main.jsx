import { useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState();

  const increment = (c) => {
    // setCount(count + c);
    setCount((prev) => prev + c);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    increment(value);
  }
  return (
    <div className="">
      count: {count}
      <form onSubmit={handleSubmit}>
        <label htmlFor="incrementer">Incrementer:</label>
        <input 
          id="incrementer"
          type="number"
          required
          value={value}
          onChange={(e)=> setValue(Number(e.target.value))}
        />
        <button>Increment</button>
        {/* <button onClick={() => increment(value)}>Increment</button> */}
      </form>
    </div>
  );
};

export default Main;
