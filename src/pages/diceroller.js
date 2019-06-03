import React from "react"
import { Link } from "gatsby"
import './diceroller.css'

import Layout from "../components/layout"
import Image from "../components/image"
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
  let rollers = ['d4','d6','d8','d10','d12','d20' ]

  return (
  <Layout>
    <SEO title="DiceRoller" />
    <h1>Dice Roller</h1>
   
    <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
      <Set 
      dice = {rollers}
      mod = {20}
      title = {'My Dice Set'}
      />

      {/* <div class = 'set'>
        <D4 />
        <D6 />
        <D8 />
        <D10 />
        <D12 />
        <D20 />
        
        <Mod val={'-5'} />
      </div> */}



    </div>
  </Layout>
  
)}

export default DiceRoller
