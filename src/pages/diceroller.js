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
  let rollers = [4,6,8,10,12,20 ]

  return (
  <Layout>
    <SEO title="DiceRoller" />
    <h1>Dice Roller</h1>
   
    <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
      <Set 
      dice = {rollers}
      mod = {12}
      title = {'My Dice Set'}
      active = {false}
      />

    </div>
  </Layout>
  
)}

export default DiceRoller
