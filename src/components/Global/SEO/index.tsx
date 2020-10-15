import { FixedObject } from 'gatsby-image';
import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadataQueryData } from '../../../graphql/queries/useSiteMetadataQueryData';
import {
  profileAuthor,
  websiteBaseTitle,
  websiteDefaultDescription,
  websiteDefaultLanguage,
  websiteDefaultLocale,
  websiteFullPath,
} from '../../../shared/constants/site-metadata';

type MetaProps =
  | { name: string; content: string; property?: undefined }
  | { property: string; content: string; name?: undefined };

type SEOProps = {
  title: string;
  description?: string;
  lang?: string;
  meta?: MetaProps[];
  pathname: string;
  image: FixedObject;
};

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
