import { Entry } from 'contentful';
import { FluidObject } from 'gatsby-image';

type PreviewDescription = { previewDescription: string };
type PreviewPicture = { fluid: FluidObject | FluidObject[] };

export interface IProjectFields {
  /** Title */
  title: string;

  /** Order */
  order: number;

  /** Type */
  type: 'Website' | 'Mobile Application' | 'Design Prototype';

  /** Preview Description */
  previewDescription: PreviewDescription;

  /** Date Range Beginning */
  dateRangeBeginning: string;

  /** Date Range End */
  dateRangeEnd: string;

  /** Preview Picture */
  previewPicture: PreviewPicture;

  /** Gallery */
  gallery?: PreviewPicture | undefined;

  /** Hosted URL */
  hostedUrl: string;

  /** GitHub URL */
  gitHubUrl: string;

  /** Figma URL */
  figmaUrl: string;

  /** Technology Tags */
  technologyTags: (
    | 'JavaScript'
    | 'TypeScript'
    | 'Python'
    | 'Bash'
    | 'React'
    | 'Redux'
    | 'Create React App'
    | 'Vue'
    | 'Vuex'
    | 'HTML'
    | 'Pug'
    | 'CSS'
    | 'Sass'
    | 'Bootstrap'
    | 'Tailwind CSS'
    | 'Node.js'
    | 'Express'
    | 'React Native'
    | 'Expo'
    | 'MongoDB'
    | 'Postgres'
    | 'TypeORM'
    | 'Figma'
    | 'Docker'
    | 'Git'
    | 'GitHub'
    | 'Gatsby'
    | 'Next.js'
    | 'Jest'
    | 'Other'
  )[];
}

/** Project entity that represents projects to display on portfolio site (http://adelerium.dev/). */

export interface IProject extends Entry<IProjectFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'project';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE = 'project';

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';

type ProjectNode = { node: IProjectFields };
type AllContentfulProject = { edges: ProjectNode[] };
export type PageQueryData = { allContentfulProject: AllContentfulProject };
