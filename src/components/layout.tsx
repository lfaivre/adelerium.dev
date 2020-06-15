import React, { useRef } from "react"
import { Location } from "@reach/router"

import SideBar from "./SideBar"
import Header from "./Header"
import Footer from "./Footer"

import "../styles/return-button.css"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const scrollSectionRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    if (scrollSectionRef.current) {
      scrollSectionRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }

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
              <div
                ref={scrollSectionRef}
                className="w-full h-full overflow-y-scroll"
              >
                <main className="w-full min-h-full">{children}</main>
                <div className="w-full p-8 flex flex-row justify-end items-center">
                  <button onClick={handleScroll} className="return-button">
                    <span className="indicator"></span>
                    <span className="ghost"></span>
                  </button>
                </div>
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
