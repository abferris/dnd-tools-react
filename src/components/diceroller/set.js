import React from "react"

import D4 from "./dice/d4"
import D6 from "./dice/d6"
import D8 from "./dice/d8"
import D10 from "./dice/d10"
import D12 from "./dice/d12"
import D20 from "./dice/d20"
import Num from "./mod.js/index.js"
import Roller from "./diceroller/roller.js/index.js"


function Set(props){
  let min = props.mod + props.dice.length;

  let max = props.dice.reduce((acc,val) => {
    acc += val;
    return acc
  }, state.mod);
let avg = (max-props.mod)/2+props.mod;

  return (
    <div class='container'>
      <h2 >
      {props.title}
      </h2>
      
      <div class='set'>
        { props.dice.map(die=> {
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
        <Num type = 'Mod' val={props.mod} />
        <Num type = 'Min' val={min} />
        <Num type = 'Max' val={max} />
        <Num type = 'Avg' val={avg} />
        <Roller 
         dice = {props.dice}
         mod = {props.mod} roll = {roll}
        />
            
      </div>
    </div>
  )
  

}

export default Set