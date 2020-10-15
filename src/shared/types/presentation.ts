import { ExternalLinks, InternalLinks, Left, Next, Previous, Right } from '../constants/presentation';

/** @note SideBar Component (Layout) */

export type SideBarView = typeof InternalLinks | typeof ExternalLinks;

/** @note StyledInternalLink Component (Layout) */

export type StyledInternalLinkDirection = typeof Previous | typeof Next;

/** @note Preview Component (Projects Page) */

export type PreviewDirection = typeof Left | typeof Right;
