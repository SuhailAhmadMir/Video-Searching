import React from "react"
import loader from "../assets/loader.gif"

const Loader = () => {
  return (
    <div className="ui right floated segment padded basic">
      <img style={{ marginLeft: "20%" }} src={loader} alt="loading" />
    </div>
  )
}

export default Loader
