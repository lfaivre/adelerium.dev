// @docs https://www.gatsbyjs.com/docs/api-files-gatsby-browser/
// @todo Refactor root, page, and layout implementation

import './src/styles/index.css';
import rootWrapper from './src/state/root-wrapper';
import { LayoutPageWrapper } from './src/components/Layout';

export const wrapRootElement = rootWrapper;
export const wrapPageElement = LayoutPageWrapper;

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated.\nReload to display the latest version?`
  );

  if (answer === true) window.location.reload();
};
