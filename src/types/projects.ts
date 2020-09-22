import { FluidObject, FixedObject } from 'gatsby-image';

type PreviewDescription = { previewDescription: string };
type PreviewPicture = { fluid: FluidObject | FluidObject[] };

export interface IProjectFields {
  /** Title */
  title: string;

  /** Rating */
  rating: number;

  /** Type */
  type: 'Website' | 'Mobile Application' | 'Design Prototype';

  /** Date Range Beginning */
  dateRangeBeginning: string;

  /** Date Range End */
  dateRangeEnd: string;

  /** Preview Description */
  previewDescription: PreviewDescription;

  /** Preview Picture */
  previewPicture: PreviewPicture;

  /** Gallery */
  gallery?: PreviewPicture | undefined;

  /** Technology Tags */
  technologyTags: string[];

  /** Hosted URL */
  hostedUrl: string;

  /** GitHub URL */
  gitHubUrl: string;

  /** Figma URL */
  figmaUrl: string;
}

/** Project entity that represents projects to display on portfolio site (http://adelerium.dev/). */

export interface IProject extends IProjectFields {
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

type ProjectNode = { node: IProjectFields };
type AllContentfulProject = { edges: ProjectNode[] };
type ContentfulAsset = { fixed: FixedObject };

export type PageQueryData = {
  allContentfulProject: AllContentfulProject;
  contentfulAsset: ContentfulAsset;
};
