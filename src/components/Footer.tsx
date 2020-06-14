import React from "react"
import { LocationContext } from "reach__router"

import StyledInternalLink from "./StyledInternalLink"
import { InternalLinkDirection } from "../data/routes-temp"
import "../styles/arrow.css"

interface Props extends LocationContext {}

const Footer = (props: Props) => {
  return (
    <footer className="w-full p-8 bg-offwhite">
      <div className="w-full mb-8 flex flex-row justify-between items-start">
        <div className="flex flex-col justify-center items-start">
          <p className="text-charcoal text-base playfair-display font-bold text-left">
            Need a website?
          </p>
          <a
            href="http://kevaladesign.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal text-base playfair-display font-normal text-left"
          >
            kevaladesign.com
          </a>
        </div>
        <div className="max-w-3/4 flex flex-col justify-center items-center">
          <p className="text-charcoal text-base playfair-display font-bold text-center">
            Did you know?
          </p>
          <p className="text-charcoal text-base playfair-display font-normal text-center">
            You know those facts written under Snapple caps? Use them here.
          </p>
        </div>
        <div className="flex flex-row justify-end items-center">
          <a
            href="https://www.linkedin.com/in/lorenzofaivre/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal mr-4 text-base playfair-display font-bold text-right"
          >
            li.
          </a>
          <a
            href="https://github.com/lfaivre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal text-base playfair-display font-bold text-right"
          >
            gh.
          </a>
        </div>
      </div>
      <div className="w-full mb-8 flex flex-row justify-between items-start">
        <StyledInternalLink
          {...props}
          direction={InternalLinkDirection.Previous}
        />
        <div className="flex flex-row justify-center items-center">
          <p className="text-charcoal text-4xl mrs-sheppards font-normal text-center">
            kevala design.
          </p>
        </div>
        <StyledInternalLink {...props} direction={InternalLinkDirection.Next} />
      </div>
      <div className="w-full flex flex-row justify-center items-start">
        <p className="text-charcoal text-xs playfair-display-sc font-normal text-center uppercase">
          Copyright &copy; {new Date().getFullYear()} Lorenzo Faivre
        </p>
      </div>
    </footer>
  )
}

export default Footer
