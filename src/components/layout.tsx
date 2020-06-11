import React from "react"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen bg-white flex flex-row">
      <div className="w-1/5 h-full bg-white"></div>
      <div className="w-4/5 h-full bg-black flex flex-col">
        <div className="w-full h-24 bg-white"></div>
        <div className="w-full flex-1 bg-red-100">{children}</div>
      </div>
    </div>
  )
}

export default Layout
