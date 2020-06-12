import React from "react"

const SideBar = () => {
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
      <div className="w-full pb-8 flex flex-col items-center">
        <hr className="w-full h-0 mb-4 border border-offwhite" />
        <p className="w-full mb-4 text-base text-left playfair-display font-bold text-offwhite lowercase">
          Navigation
        </p>
        <p className="w-full mb-4 text-base text-left playfair-display font-normal text-offwhite normal-case">
          About
        </p>
        <p className="w-full mb-4 text-base text-left playfair-display font-normal text-offwhite normal-case">
          Projects
        </p>
        <p className="w-full text-base text-left playfair-display font-normal text-offwhite normal-case">
          Blog
        </p>
      </div>
      <div className="w-full pb-8 flex flex-col items-center">
        <hr className="w-full h-0 mb-4 border border-offwhite" />
        <p className="w-full mb-4 text-base text-left playfair-display font-bold text-offwhite lowercase">
          Externals
        </p>
        <p className="w-full mb-4 text-base text-left playfair-display font-normal text-offwhite normal-case">
          GitHub
        </p>
        <p className="w-full mb-4 text-base text-left playfair-display font-normal text-offwhite normal-case">
          LinkedIn
        </p>
        <p className="w-full mb-4 text-base text-left playfair-display font-normal text-offwhite normal-case">
          Resume
        </p>
        <p className="w-full text-base text-left playfair-display font-normal text-offwhite normal-case">
          Email
        </p>
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        <p className="w-full text-2xl text-center mrs-sheppards font-normal text-offwhite lowercase">
          KD.
        </p>
      </div>
    </div>
  )
}

export default SideBar
