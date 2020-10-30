import { GlobalStylesProps } from '@adelerium/styles/global/types';
import { css, Global } from '@emotion/core';
import React, { ReactElement } from 'react';

export const GlobalStyles = ({ backgroundColor }: GlobalStylesProps): ReactElement => {
  return (
    <Global
      styles={css`
        html {
          background-color: ${backgroundColor || `#000000`};
        }

        body {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow-x: hidden;
          overflow-y: scroll;
          overscroll-behavior: none;
        }

        body #___gatsby {
          width: 100%;
          height: 100%;
        }

        body #___gatsby #gatsby-focus-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
        }
      `}
    />
  );
};
