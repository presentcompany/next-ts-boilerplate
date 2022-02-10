import React from 'react';
import Head from 'next/head';
import SEO from '../../../next-seo.config';
import { DefaultSeo } from 'next-seo';
import type { NextSeoProps } from 'next-seo';

export type LayoutHeadProps = NextSeoProps;

export function LayoutHead({
  title,
  description,
  canonical,
  additionalMetaTags = []
}: LayoutHeadProps): React.ReactElement {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <DefaultSeo
        {...SEO}
        title={title}
        titleTemplate={`${process.env.NEXT_PUBLIC_APP_NAME} - %s`}
        canonical={canonical}
        description={description}
        additionalMetaTags={[
          {
            property: 'viewport',
            content: 'initial-scale=1.0, width=device-width'
          },
          {
            name: 'theme-color',
            content: '#ffffff'
          },
          ...additionalMetaTags
        ]}
      />
    </React.Fragment>
  );
}
