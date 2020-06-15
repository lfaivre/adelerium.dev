import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { LocationContext } from "reach__router"

import { pathData, InternalLinkDirection } from "../data/routes-temp"
import "../styles/arrow.css"

interface Props extends LocationContext {
  direction: InternalLinkDirection
}

const StyledInternalLink = ({ location, direction }: Props) => {
  const [currentLocationDetails, setCurrentLocationDetails] = useState({
    pathname: "default",
    text: pathData["default"].text,
    previous: pathData["default"].previous,
    next: pathData["default"].next,
  })

  useEffect(() => {
    const pathname = location.pathname || "default"
    setCurrentLocationDetails({
      pathname,
      text: pathData[pathname].text,
      previous: pathData[pathname].previous,
      next: pathData[pathname].next,
    })
  }, [location])

  const linkData = (direction: InternalLinkDirection) => {
    let pathname
    if (direction === InternalLinkDirection.Previous) {
      pathname = currentLocationDetails.previous
    } else {
      pathname = currentLocationDetails.next
    }
    const text = pathData[pathname].text
    return { pathname, text }
  }

  return linkData(direction).pathname !== currentLocationDetails.pathname ? (
    <AniLink
      className="h-full w-32"
      swipe
      direction="left"
      to={linkData(direction).pathname}
    >
      <div
        className={`w-full h-full flex flex-col justify-center ${
          direction === InternalLinkDirection.Previous
            ? "items-end"
            : "items-start"
        }`}
      >
        <div className="flex flex-row items-center">
          <p
            className={`text-charcoal text-base playfair-display font-bold ${
              direction === InternalLinkDirection.Previous
                ? "text-right"
                : "text-left"
            }`}
          >
            {direction === InternalLinkDirection.Previous
              ? "Previous."
              : "Next."}
          </p>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          {direction === InternalLinkDirection.Previous ? (
            <span className="mr-4 arrow -left">
              <span className="shaft"></span>
            </span>
          ) : null}
          <p
            className={`text-base playfair-display font-normal text-left ${
              direction === InternalLinkDirection.Previous
                ? "text-right"
                : "text-left"
            }`}
          >
            {linkData(direction).text}
          </p>
          {direction === InternalLinkDirection.Next ? (
            <span className="ml-4 arrow -right">
              <span className="shaft"></span>
            </span>
          ) : null}
        </div>
      </div>
    </AniLink>
  ) : (
    <div className="h-full w-32"></div>
  )
}

export default StyledInternalLink
