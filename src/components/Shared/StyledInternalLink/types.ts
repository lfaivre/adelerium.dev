import { PathDataHook } from '../../../types/paths';
import { InternalLinkDirection as ILD } from '../../../types/presentation';

// @note Types for File: index.ts

export interface StyledInternalLinkProps extends PathDataHook {
  direction: ILD;
}

// @note Types for File: styles.ts

export interface DirectionProps {
  _direction: ILD;
}

export interface StyledArrowProps
  extends React.HTMLProps<HTMLSpanElement>,
    DirectionProps {}
