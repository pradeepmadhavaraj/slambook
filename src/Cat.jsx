import { useState } from "react";

//import React from "react";
function Cat(){
  let[input, SetInput]=useState('');
 
  return (
    <>   
    <input type="text" id="oldname" value={input}></input>
    <input type="text" id="newname" onChange={(e)=>SetInput(e.target.value)}></input>
  
    
    </>
  )
}
export default Cat;