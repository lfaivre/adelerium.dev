import React from "react"
import { Link } from "gatsby"

import "../styles/arrow.css"
import { pathData } from "../data/routes-temp"

interface Props {
  location: any
}

const Header = ({ location }: Props) => {
  const titleText = () => {
    return `${pathData[location.pathname].text}.`
  }

  const nextData = () => {
    const nextPage = pathData[location.pathname].next
    const nextPageText = pathData[nextPage].text
    return { nextPage, nextPageText }
  }

  return (
    <div className="w-full h-full py-4 px-8 flex flex-row justify-between items-center bg-offwhite">
      <div>
        <h1 className="text-4xl playfair-display font-bold">{titleText()}</h1>
      </div>
      <div className="flex flex-col items-start justify-center">
        <Link to={nextData().nextPage}>
          <div>
            <p className="text-base playfair-display font-bold">Next.</p>
          </div>
          <div className="flex flex-row justify-start items-center">
            <p className="mr-4 text-base playfair-display font-normal">
              {nextData().nextPageText}
            </p>
            <span className="arrow -right">
              <span className="shaft"></span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
