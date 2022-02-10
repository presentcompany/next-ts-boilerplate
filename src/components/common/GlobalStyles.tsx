import React from 'react';
import { Global } from '@emotion/react';

export function GlobalStyles(): React.ReactElement {
  return (
    <Global
      styles={`
        @import url("https://use.typekit.net/raf2yfl.css");
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
}
