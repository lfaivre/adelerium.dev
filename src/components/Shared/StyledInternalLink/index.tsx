import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { LocationContext } from "reach__router"

import { SitePaths } from "../../../data/paths"
import { TPathname, INDEX } from "../../../types/paths"
import { InternalLinkDirection } from "../../../types/presentation"
import "../../../styles/arrow.css"

interface Props extends LocationContext {
  direction: InternalLinkDirection
}

const StyledInternalLink = ({ location, direction }: Props) => {
  const [currentLocationDetails, setCurrentLocationDetails] = useState({
    pathname: SitePaths[INDEX].pathname,
    text: SitePaths[INDEX].text,
    previous: SitePaths[INDEX].previous,
    next: SitePaths[INDEX].next,
  })

  useEffect(() => {
    const pathname =
      (location.pathname as TPathname) || SitePaths[INDEX].pathname
    setCurrentLocationDetails({
      pathname,
      text: SitePaths[pathname].text,
      previous: SitePaths[pathname].previous,
      next: SitePaths[pathname].next,
    })
  }, [location.pathname])

  const linkData = (direction: InternalLinkDirection) => {
    const pathname =
      direction === InternalLinkDirection.Previous
        ? currentLocationDetails.previous
        : currentLocationDetails.next
    const text = SitePaths[pathname].text
    return { pathname, text }
  }

  return linkData(direction).pathname !== currentLocationDetails.pathname ? (
    <Link className="h-full w-32" to={linkData(direction).pathname}>
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
    </Link>
  ) : (
    <div className="h-full w-32"></div>
  )
}

export default StyledInternalLink
