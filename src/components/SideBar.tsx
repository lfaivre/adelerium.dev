import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

// TODO: REFACTOR TYPESCRIPT, PATCHED IN FOR NOW
import { SideBarData } from "../data/sidebar-temp"

const SideBar = () => {
  const linkSections = () => {
    return Object.values(SideBarData).map(data => {
      const linkElements = () => {
        return data.links.map(
          (link: {
            text: string
            internalURL?: string
            externalURL?: string
          }) => {
            return link.internalURL ? (
              <Link
                to={link.internalURL}
                className="w-full mb-4 text-base text-left playfair-display font-normal text-offwhite"
                key={link.text}
              >
                {link.text}
              </Link>
            ) : (
              <a
                href={link.externalURL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mb-4 text-base text-left playfair-display font-normal text-offwhite"
                key={link.text}
              >
                {link.text}
              </a>
            )
          }
        )
      }

      return (
        <div
          className="w-full pb-8 flex flex-col items-center"
          key={data.title}
        >
          <hr className="w-full h-0 mb-4 border border-offwhite" />
          <p className="w-full mb-4 text-base text-left playfair-display font-bold text-offwhite lowercase">
            {data.title}
          </p>
          {linkElements()}
        </div>
      )
    })
  }

  return (
    <div className="w-full h-full pt-8 pb-4 px-8 flex flex-col justify-between items-center bg-charcoal">
      <div className="w-full pb-8 flex flex-col">
        <div className="w-full h-64 mb-4 bg-offwhite"></div>
        <div className="w-full flex flex-col items-center">
          <p className="w-full mb-2 text-2xl text-center playfair-display font-bold text-offwhite lowercase">
            Lorenzo Faivre
          </p>
          <p className="w-full text-base text-center playfair-display font-normal text-offwhite lowercase">
            A software engineer, among other things
          </p>
        </div>
      </div>
      {linkSections()}
      <div className="w-full flex flex-row justify-center items-center">
        <p className="w-full text-2xl text-center mrs-sheppards font-normal text-offwhite lowercase">
          KD.
        </p>
      </div>
    </div>
  )
}

export default SideBar
