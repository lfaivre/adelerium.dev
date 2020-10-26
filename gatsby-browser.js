import { enableAllPlugins, setAutoFreeze } from 'immer';

// @note Enable Immer

enableAllPlugins();

/** @todo Re-enable this in development if possible, causing issues with react-tracked */
setAutoFreeze(false);

// @note Import Stylesheet(s): Fonts

import 'typeface-lobster-two';
import 'typeface-mrs-sheppards';
import 'typeface-playfair-display';

import { RootWrapperElement } from '@adelerium/components/Global/RootWrapperElement';
import { PageWrapperElement } from '@adelerium/components/Global/Layout';

export const wrapRootElement = RootWrapperElement;
export const wrapPageElement = PageWrapperElement;
