export interface ProjectAttrs {
  order: number;
  preview: ProjectPreviewAttrs;
  technologyTags: Array<ProjectTechnologyTags>;
  externalLinks: ProjectLinkAttrs;
  gallery: Array<string>;
}

export interface ProjectPreviewAttrs {
  title: string;
  type: ProjectType;
  date: string;
  description: string;
  pictureURL: string;
  tempQuery: any;
}

export type ProjectType = 'Website' | 'Mobile Application' | 'Design Prototype';

export interface ProjectLinkAttrs {
  hostedURL?: string;
  githubURL?: string;
  figmaURL?: string;
}

export type ProjectTechnologyTags =
  | ScriptingTechnology
  | FrontEndTechnology
  | BackEndTechnology
  | MobileTechnology
  | DatabaseTechnology
  | OtherTechnology;

export type ScriptingTechnology =
  | 'JavaScript'
  | 'TypeScript'
  | 'Python'
  | 'Bash';
export type FrontEndTechnology =
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
  | 'Tailwind CSS';
export type BackEndTechnology = 'Node.js' | 'Express';
export type MobileTechnology = 'React Native' | 'Expo';
export type DatabaseTechnology = 'MongoDB' | 'Postgres' | 'TypeORM';
export type OtherTechnology = 'Other' | 'Figma' | 'Docker' | 'Git' | 'GitHub';

export interface ProjectDataAttrs {
  projects: Array<ProjectAttrs>;
  count(): number;
}
