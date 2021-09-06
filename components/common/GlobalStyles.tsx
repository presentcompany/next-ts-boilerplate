import React from 'react';
import { Global } from '@emotion/react';

export default function GlobalStyles(): React.ReactElement {
  return (
    <Global
      styles={`
        @import url("https://use.typekit.net/raf2yfl.css");
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

        .swiper-pagination-bullet-active {
        background-color:#232BBE;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .gem-card .swiper-container {
          width: auto !important;
          padding-bottom: 50px !important;

          @media only screen and (min-width: 48em) {
            width: auto !important;
          }
        }

        .gem-card .swiper-pagination {
          bottom: 20px !important;
        }

        .swiper-container {
          width: calc(100vw - 16px) !important;

          @media only screen and (min-width: 48em) {
            width: calc(100vw - 24px) !important;
          }
        }

        .swiper-slide:not(.quote-swiper) {
          margin-right: 4px !important;
          width: calc(100%/1.5) !important;

          @media only screen and (min-width: 500px) {
            width: calc(100%/2.5) !important;
          }

          @media only screen and (min-width: 650px) {
            width: calc(25% - 10px) !important;
          }

          @media only screen and (min-width: 1000px) {
            width: calc(20% - 9px) !important;
          }

          @media only screen and (min-width: 1200px) {
            width: calc(100%/6 - 8px) !important;
          }

          @media only screen and (min-width: 1900px) {
            width: calc(100%/7 - 7px) !important;
          }

          @media only screen and (min-width: 2400px) {
            width: calc(100%/8 - 7px) !important;
          }

          @media only screen and (min-width: 2900px) {
            width: calc(100%/9 - 6px) !important;
          }

          @media only screen and (min-width: 3500px) {
            width: calc(100%/10 - 6px) !important;
          }

        .swiper-pagination-bullets {

        }
      `}
    />
  );
}
