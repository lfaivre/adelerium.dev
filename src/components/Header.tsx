import React from "react"

const Header = () => {
  return (
    <div className="w-full h-full py-4 px-8 flex flex-row justify-between items-center bg-offwhite">
      <div>
        <h1 className="text-4xl">About</h1>
      </div>
      <div className="flex flex-col items-start justify-center">
        <p>Next</p>
        <p>Projects --&gt;</p>
      </div>
    </div>
  )
}

export default Header
