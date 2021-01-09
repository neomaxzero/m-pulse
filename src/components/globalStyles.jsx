import React from 'react';

import { Global, css, useTheme } from '@emotion/react';
import * as fonts from './fonts';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Inter';
          font-weight: 400;
          font-display: optional;
          src: url('${fonts.InterUIWoff2}') format('woff2'),
            url('${fonts.InterUIWoff}') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-weight: 600;
          font-display: optional;
          src: url('${fonts.InterUISemiBoldWoff2}') format('woff2'),
            url('${fonts.InterUISemiBoldWoff}') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-weight: 700;
          font-display: optional;
          src: url('${fonts.InterUIBoldWoff2}') format('woff2'),
            url('${fonts.InterUIBoldWoff}') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-weight: 100;
          font-display: optional;
          src: url('${fonts.InterUIThinWoff}') format('woff2'),
            url('${fonts.InterUIThinWoff2}') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: optional;
          src: url('${fonts.InterUILightWoff}') format('woff2'),
            url('${fonts.InterUILightWoff2}') format('woff');
        }

        body {
          background-color: ${theme.colors.background};
        }

        * {
          color: ${theme.colors.text};
        }

        h1,
        h2,
        h3,
        h4,
        strong {
          color: ${theme.colors.strong};
        }
      `}
    />
  );
};

export default GlobalStyles;
