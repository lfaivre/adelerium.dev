import { SEOProps } from '@adelerium/components/Global/SEO/types';
import {
  profileAuthor,
  websiteBaseTitle,
  websiteDefaultDescription,
  websiteDefaultLanguage,
  websiteDefaultLocale,
  websiteFullPath,
} from '@adelerium/constants/site-metadata';
import { useSiteMetadataQueryData } from '@adelerium/graphql/useSiteMetadataQueryData';
import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

export const SEO = ({
  title,
  description = websiteDefaultDescription,
  lang = websiteDefaultLanguage,
  meta = [],
  pathname,
  image,
}: SEOProps): ReactElement => {
  const { site } = useSiteMetadataQueryData();

  const metaDescription = description || site?.siteMetadata?.description || websiteDefaultDescription;
  const metaUrl = `${site?.siteMetadata?.siteUrl || websiteFullPath}${pathname}`;

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site?.siteMetadata?.title || websiteBaseTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: websiteDefaultLocale,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.author || profileAuthor,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat([
          {
            property: `og:image`,
            content: `http:${image.src}`,
          },
          {
            property: `og:image:secure_url`,
            content: `https:${image.src}`,
          },
          {
            property: `og:image:type`,
            content: `image/png`,
          },
          {
            property: `og:image:alt`,
            content: title,
          },
          {
            property: `og:image:width`,
            content: `${image.width}`,
          },
          {
            property: `og:image:height`,
            content: `${image.height}`,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
        ])
        .concat(meta)}
    />
  );
};
