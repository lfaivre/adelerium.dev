import { enableAllPlugins } from 'immer';

// @note Enable Immer

enableAllPlugins();

// @note Import Stylesheet(s) and Configure: Font Awesome

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// @note Import Stylesheet(s): Fonts

import 'typeface-lobster-two';
import 'typeface-mrs-sheppards';
import 'typeface-playfair-display';

import { RootWrapperElement } from '@adelerium/components/Global/RootWrapperElement';
import { PageWrapperElement } from '@adelerium/components/Global/Layout';

export const wrapRootElement = RootWrapperElement;
export const wrapPageElement = PageWrapperElement;
