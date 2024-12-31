import  { useEffect, useState } from 'react';

function Useeffects() {
  let [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("value updated");
    return(()=>{console.log("code clean")})
  },[count])
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <button onClick={() => setCount(count - 1)}>Decrement </button>
    </>
  );
}

export default Useeffects;
