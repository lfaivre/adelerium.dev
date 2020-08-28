// @docs https://www.gatsbyjs.com/docs/api-files-gatsby-browser/
// @todo Refactor root, page, and layout implementation

// @note Import Stylesheet(s): Global Styles

import './src/styles/index.css';

// @note Import Stylesheet(s): Font Awesome

import './src/styles/font-awesome';

// @note Import Stylesheet(s): Google fonts

import 'typeface-lobster-two';
import 'typeface-mrs-sheppards';
import 'typeface-playfair-display';
import 'typeface-playfair-display-sc';

import { RootWrapperElement } from './src/components/RootWrapperElement';
import { PageWrapperElement } from './src/components/Layout';

export const wrapRootElement = RootWrapperElement;
export const wrapPageElement = PageWrapperElement;

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated.\nReload to display the latest version?`
  );

  if (answer === true) window.location.reload();
};
