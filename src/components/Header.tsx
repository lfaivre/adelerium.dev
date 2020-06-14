import React from "react"
import { LocationContext } from "reach__router"

import StyledInternalLink from "./StyledInternalLink"
import { pathData, InternalLinkDirection } from "../data/routes-temp"

interface Props extends LocationContext {}

const Header = (props: Props) => {
  const titleText = () => {
    return `${pathData[props.location.pathname].text}.`
  }

  return (
    <header className="w-full h-full py-4 px-8 flex flex-row justify-between items-center bg-offwhite">
      <div>
        <h1 className="text-charcoal text-4xl playfair-display font-bold">
          {titleText()}
        </h1>
      </div>
      <StyledInternalLink {...props} direction={InternalLinkDirection.Next} />
    </header>
  )
}

export default Header
