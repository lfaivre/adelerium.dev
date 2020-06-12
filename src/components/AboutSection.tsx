import React from "react"

import { AboutSectionAttributes } from "../data/temp"

interface Props {
  sectionData: AboutSectionAttributes
}

const AboutSection = ({ sectionData }: Props) => {
  return (
    <div className="test-2 w-full mb-8 last:mb-0 flex flex-row">
      <div className="w-1/3 h-full bg-offwhite opacity-75"></div>
      <div className="w-2/3 h-full p-8 flex flex-col justify-start items-start">
        <div className="">
          <h1 className="text-7xl text-left playfair-display font-bold text-offpink normal-case">
            {sectionData.title}
          </h1>
        </div>
        <div className="">
          <p className="mb-8 w-3/5 text-2xl text-left playfair-display font-normal text-offwhite normal-case">
            {sectionData.body}
          </p>
          <p className="mb-8 text-base text-left playfair-display font-normal text-offwhite normal-case underline">
            {sectionData.link.firstTextFragment}&nbsp;
            <span className="font-bold">
              {sectionData.link.secondTextFragment}
            </span>
          </p>
          <p className="test-3 text-3.5xl text-left playfair-display font-bold text-offwhite normal-case">
            {`${sectionData.order}`}&nbsp;/&nbsp;{`${3}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
