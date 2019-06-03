import React from "react"

import D4 from "./dice/d4"
import D6 from "./dice/d6"
import D8 from "./dice/d8"
import D10 from "./dice/d10"
import D12 from "./dice/d12"
import D20 from "./dice/d20"
import Mod from "./mod.js"


function Set(props){
  let fields = Object.keys(props.dice)  
  return (
    <div class='container'>
      <h2>{props.title}</h2>
      <div class='set'>
        { props.dice.map(die=> {
          if(die==='d4'){
            return(<D4 />
            )}
          if(die==='d6'){
            return(<D6 />
            )}
          if(die==='d8'){
            return(<D8 />
            )}
          if(die==='d10'){
            return(<D10 />
            )}
          if(die==='d12'){
            return(<D12 />
            )}
          if(die==='d20'){
            return(<D20 />
            )}
          }
        )
        }
        <Mod val={props.mod} />
            
      </div>
    </div>
  )
}

export default Set