// @docs https://www.gatsbyjs.com/docs/api-files-gatsby-ssr/
// @todo Refactor root, page, and layout implementation

import { RootWrapperElement } from './src/components/RootWrapperElement';
import { PageWrapperElement } from './src/components/Layout';

export const wrapRootElement = RootWrapperElement;
export const wrapPageElement = PageWrapperElement;
