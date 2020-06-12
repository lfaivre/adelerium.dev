import React from "react"

import "../styles/arrow.css"

const Header = () => {
  return (
    <div className="w-full h-full py-4 px-8 flex flex-row justify-between items-center bg-offwhite">
      <div>
        <h1 className="text-4xl playfair-display font-bold">About.</h1>
      </div>
      <div className="flex flex-col items-start justify-center">
        <div>
          <p className="text-base playfair-display font-bold">Next</p>
        </div>
        <div className="flex flex-row justify-start items-center">
          <p className="mr-4 text-base playfair-display font-normal">
            Projects
          </p>
          <span className="arrow -right">
            <span className="shaft"></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
