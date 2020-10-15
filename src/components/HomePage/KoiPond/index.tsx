import '@adelerium/components/HomePage/KoiPond/koi-pond.css';
import React, { ReactElement } from 'react';

/**
 * @note Koi Fish Animation Credit
 *
 * This animated component is a slightly modified version of this CodePen:
 *
 * @link https://codepen.io/Adir-SL/pen/LYEPzxW
 * @author adircode
 */

const numberOfFish = 2;
const numberOfKoiCoilsPerFish = 15;
const fishToMap = new Array(numberOfFish).fill(Math.random());
const koiCoilsToMap = new Array(numberOfKoiCoilsPerFish).fill(Math.random());

export const KoiPond = (): ReactElement => {
  return (
    <div className="seaLevel">
      {fishToMap.map((_, fishIndex) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div className="fish" key={fishIndex}>
            {koiCoilsToMap.map((__, koiCoilIndex) => {
              // eslint-disable-next-line react/no-array-index-key
              return <div className="koiCoil" key={koiCoilIndex} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

/**
 * @note CSS Support
 *
 * The css property `offset-path` has limited support:
 * @docs https://caniuse.com/?search=offset-path
 *
 * The `cssToTest` constant is the exact `offset-path` property from the CSS
 * stylesheet associated with this component.
 *
 * The parent that renders this component can use this exported constant and
 * `CSS.supports` to determine whether to render the component.
 */

export const cssToTest = `offset-path: path('M11.7692 229.5C14.552 200.052 7.51901 171.858 -42.8757 170.644C-105.869 169.128 -131.294 76.612 -101.695 51.5872C-72.0955 26.5625 -24.6607 -50.7867 70.5883 51.5872C165.837 153.961 27.7073 131.211 33.0199 183.157C38.3326 235.102 90.3211 195.669 139.274 223.727C188.226 251.785 207.959 299.56 139.274 316.243C70.5883 332.926 41.3685 398.9 81.9726 419.754C122.577 440.608 222 478.524 222 419.754C222 372.738 222 242.432 222 183.157C219.091 129.948 175.78 30.8091 25.8099 59.9288C-161.652 96.3284 -30.3529 119.837 25.8099 141.07C81.9726 162.303 171.529 204.769 126.751 260.506C81.9726 316.243 101.326 362.501 139.274 373.496C177.222 384.492 170.012 464.495 70.5883 462.979C-28.835 461.462 -42.8757 393.015 -42.8757 373.496C-42.8757 238.288 11.7692 293 11.7692 240.506C11.7692 208.05 11.7692 237.336 11.7692 229.5Z')`;
