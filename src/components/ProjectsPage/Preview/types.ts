import { IProjectFields } from '../../../shared/types/pages/projects';
import { ProjectDirection as PD } from '../../../shared/types/presentation';

// @note Types for File: index.tsx

export interface PreviewProps {
  project: IProjectFields;
  order: number;
}

// @note Types for File: styles.tsx

export interface DirectionProps {
  _direction: PD;
}
