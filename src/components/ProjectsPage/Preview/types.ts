import { IProjectFields } from '../../../types/projects';
import { ProjectDirection as PD } from '../../../types/presentation';

// @note Types for File: index.tsx

export interface PreviewProps {
  project: IProjectFields;
  order: number;
}

// @note Types for File: styles.tsx

export interface DirectionProps {
  _direction: PD;
}
