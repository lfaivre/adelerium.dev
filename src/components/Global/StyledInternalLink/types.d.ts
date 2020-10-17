import { Next, Previous } from '@adelerium/constants/presentation';
import { PathDataState } from '@adelerium/hooks/usePathData/types';

export type StyledInternalLinkDirection = typeof Previous | typeof Next;

export type StyledInternalLinkProps = PathDataState & { direction: StyledInternalLinkDirection };
