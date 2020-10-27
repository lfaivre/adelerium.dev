import { Next, Previous } from '@adelerium/constants/presentation';

export type StyledInternalLinkDirection = typeof Previous | typeof Next;

export type StyledInternalLinkProps = { direction: StyledInternalLinkDirection };

export type PropsAreEqualFunction = (prevProps: StyledInternalLinkProps, nextProps: StyledInternalLinkProps) => boolean;
