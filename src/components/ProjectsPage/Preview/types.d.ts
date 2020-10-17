import { PreviewListQuery_projectPreviews_edges_node as Project } from '@adelerium/@types/__generated__/PreviewListQuery';
import { Left, Right } from '@adelerium/constants/presentation';
import { ReactElement } from 'react';

export type PreviewContentTitle = `Description` | `Technology`;

export type PreviewContentItem = { title: PreviewContentTitle; content: string };

export type PreviewContentKey = `description` | `technology`;

export type PreviewContent = { [key in PreviewContentKey]: PreviewContentItem };

export type ExternalLinkTitle = `Hosted` | `GitHub` | `Figma`;

export type ExternalLinkItem = {
  title: ExternalLinkTitle;
  url: string | null;
  TextElement: ReactElement;
  Icon: ReactElement;
};

export type ExternalLinkKey = `hosted` | `github` | `figma`;

export type ExternalLinks = { [key in ExternalLinkKey]: ExternalLinkItem };

export type PreviewProps = { project: Project; order: number };

export type PreviewDirection = typeof Left | typeof Right;
