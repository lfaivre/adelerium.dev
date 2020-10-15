import { FixedObject } from 'gatsby-image';
import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadataQueryData } from '../../../graphql/queries/useSiteMetadataQueryData';

type MetaProps =
  | { name: string; content: string; property?: undefined }
  | { property: string; content: string; name?: undefined };

type SEOProps = {
  description?: string;
  lang?: string;
  meta?: MetaProps[];
  title: string;
  pathname: string;
  image: FixedObject;
};

// @todo Export this constant from a shared file
const { title: titleOnError, description: descriptionOnError, author: authorOnError } = {
  title: `Lorenzo Faivre - Software Engineer & Artist`,
  description: `Portfolio showcasing the works of Lorenzo Faivre. He is a software engineer, artist, freelancer, and cofounder based in Phoenix, Arizona.`,
  author: `@lorenzofaivre`,
};

const siteUrlOnError = `https://www.adelerium.dev`;

export const SEO = ({ description = ``, lang = `en`, meta = [], title, pathname, image }: SEOProps): ReactElement => {
  const { site } = useSiteMetadataQueryData();

  const metaDescription = description || site?.siteMetadata?.description || descriptionOnError;
  const metaUrl = `${site?.siteMetadata?.siteUrl || siteUrlOnError}${pathname}`;

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site?.siteMetadata?.title || titleOnError}`}
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
          content: `en_US`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.author || authorOnError,
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
