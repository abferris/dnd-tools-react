import React from "react"
import { Provider } from 'react-redux'
import { Link } from "gatsby"
import './diceroller.css'

import Layout from "../components/layout"
import Image from "../components/image"
import store from "../store/"
import SEO from "../components/seo"
// import D4 from "../components/dice/d4"
// import D6 from "../components/dice/d6"
// import D8 from "../components/dice/d8"
// import D10 from "../components/dice/d10"
// import D12 from "../components/dice/d12"
// import D20 from "../components/dice/d20"
// import Mod from "../components/mod.js"
import Set from "../components/set.js"


const DiceRoller = () => {

  return (
  <Provider store ={store}>
    <Layout>
      <SEO title="DiceRoller" />
      <h1>Dice Roller</h1>
    
        {
          state.store.dice.forEach((set)=>{
          return(
      <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
          <Set 
          dice = {set.dice}
          mod = {set.mod}
          title = {set.title}
          />
      </div>
          )

        })}
    </Layout>
  </Provider>
  
)}

export default DiceRoller
