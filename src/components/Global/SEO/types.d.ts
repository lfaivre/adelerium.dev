import { FixedObject } from 'gatsby-image';

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
