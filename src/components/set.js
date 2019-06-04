import React from "react"

import D4 from "./dice/d4"
import D6 from "./dice/d6"
import D8 from "./dice/d8"
import D10 from "./dice/d10"
import D12 from "./dice/d12"
import D20 from "./dice/d20"
import Num from "./mod.js"
import Roller from "./roller.js"


function Set(props){
  let state = props;
  let min = state.mod + state.dice.length;
  let roll= 'roll'
  let max = state.dice.reduce((acc,val) => {
    acc += val;
    return acc
  }, state.mod);
let avg = (max-state.mod)/2+state.mod;

  return (
    <div class='container'>
      <h2 >
      {state.title}
      </h2>
      
      <div class='set'>
        { state.dice.map(die=> {
          if(die===4){
            return(<D4 />
            )}
          if(die===6){
            return(<D6 />
            )}
          if(die===8){
            return(<D8 />
            )}
          if(die===10){
            return(<D10 />
            )}
          if(die===12){
            return(<D12 />
            )}
          if(die===20){
            return(<D20 />
            )}
          }
        )
        }
        <Num type = 'Mod' val={state.mod} />
        <Num type = 'Min' val={min} />
        <Num type = 'Max' val={max} />
        <Num type = 'Avg' val={avg} />
        <Roller 
         dice = {state.dice}
         mod = {state.mod} roll = {roll}
         handleClick = {handleClick(state.dice, state.mod)}

        />
            
      </div>
    </div>
  )
  
  function handleClick (dice,mod) {
    let output = mod
    for(let i = 0; i < dice.length; i++){
      output += Math.ceil(Math.random()*dice[i])
    }
    roll=output
  }
}

export default Set