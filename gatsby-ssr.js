// @docs https://www.gatsbyjs.com/docs/api-files-gatsby-ssr/
// @todo Refactor root, page, and layout implementation

import rootWrapper from './src/state/root-wrapper';
import { PageWrapperElement } from './src/components/Layout';

export const wrapRootElement = rootWrapper;
export const wrapPageElement = PageWrapperElement;
