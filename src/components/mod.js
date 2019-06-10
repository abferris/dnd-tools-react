/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"


function Mod({ val,type }) {

  return (
    <div class='field mod'>
      <h2>{type} </h2>
      {val}
    </div>
  )
}



export default Mod
