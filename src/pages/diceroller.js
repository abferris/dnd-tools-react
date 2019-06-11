import React from "react"
import { Provider } from 'react-redux'
import { Link } from "gatsby"
import './diceroller.css'

import Layout from "../components/layout"
import Image from "../components/image"
import store from "../store/"
import SEO from "../components/seo"
import Set from "../components/diceroller/set.js/index.js.js"


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
          roll = {set.roll}
          />
      </div>
          )

        })}
    </Layout>
  </Provider>
  
)}

export default DiceRoller
