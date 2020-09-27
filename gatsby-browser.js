// @note Import Stylesheet(s): Global Styles

import './src/shared/styles/global.css';

// @note Import Stylesheet(s) and Configure: Font Awesome

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// @note Import Stylesheet(s): Fonts

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
