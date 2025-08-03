import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";

export const Head = () => {
  return (
    <NextHead>
      <title>{siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
      <script
        async
        defer
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/umami.js`}
      />
    </NextHead>
  );
};
