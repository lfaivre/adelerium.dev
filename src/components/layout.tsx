import React from "react"

import SideBar from "./SideBar"
import Header from "./Header"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/5 h-full">
        <SideBar />
      </div>
      <div className="w-4/5 h-full flex flex-col">
        <div className="w-full h-24">
          <Header />
        </div>
        <div className="w-full flex-1 overflow-y-hidden">
          <div className="w-full h-full overflow-y-scroll">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
