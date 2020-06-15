import React from "react"
import { Location } from "@reach/router"

import SideBar from "./SideBar"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Location>
      {locationProps => (
        <div className="w-screen h-screen flex flex-row">
          <div className="w-1/5 h-full">
            <SideBar />
          </div>
          <div className="w-4/5 h-full flex flex-col">
            <div className="w-full h-24">
              <Header {...locationProps} />
            </div>
            <div className="w-full flex-1 overflow-y-hidden">
              <div className="w-full h-full overflow-y-scroll">
                <main className="w-full min-h-full">{children}</main>
                <Footer {...locationProps} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Location>
  )
}

export default Layout
