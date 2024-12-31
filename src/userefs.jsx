import {useRef, useState} from 'react'

function Userefs() {
  let[count, setCount] = useState(0);
  let countref=useRef(0);
  let increment=()=>{
    setCount(count+1);
    countref.current++;
    console.log("state value ", count);
    console.log("Ref value ", countref.current);
  }
  return (
    <>
      <h1>count : {countref.current}</h1>
      <button onClick={increment}>++</button>
    </>
  )
}
export default Userefs