import React from "react"

import { AboutSectionAttributes } from "../../data/about-temp"
import { Link } from "gatsby"

interface Props {
  sectionData: AboutSectionAttributes
  count: number
}

const AboutSection = ({ sectionData, count }: Props) => {
  const linkElement = () => {
    return sectionData.link.isInternal ? (
      <Link
        to={sectionData.link.internalURL}
        className="mb-8 text-base text-left playfair-display font-normal text-offwhite underline"
      >
        {sectionData.link.firstTextFragment}&nbsp;
        <span className="font-bold">{sectionData.link.secondTextFragment}</span>
      </Link>
    ) : (
      <a
        href={sectionData.link.externalURL}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 text-base text-left playfair-display font-normal text-offwhite underline"
      >
        {sectionData.link.firstTextFragment}&nbsp;
        <span className="font-bold">{sectionData.link.secondTextFragment}</span>
      </a>
    )
  }

  return (
    <div className="w-full mb-8 last:mb-0 flex flex-row">
      <div className="placeholder-image w-1/3 h-full bg-offwhite opacity-75"></div>
      <div className="w-2/3 h-full p-8 flex flex-col justify-start items-start">
        <div className="mb-8">
          <h1 className="ml-about-title-left text-7xl text-left playfair-display font-bold text-offpink">
            {sectionData.title}
          </h1>
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="mb-8 w-3/5 text-2xl text-left playfair-display font-normal text-offwhite">
            {sectionData.body}
          </p>
          {linkElement()}
          <p className="text-3.5xl text-left playfair-display font-bold text-offwhite">
            {`${sectionData.order}`}&nbsp;/&nbsp;{`${count}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
