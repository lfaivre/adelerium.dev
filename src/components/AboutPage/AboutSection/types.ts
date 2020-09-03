import { IAboutSectionFields } from '../../../types/about';
import { AboutSectionDirection as ASD } from '../../../types/presentation';

// @note Types for File: index.tsx

export interface AboutSectionProps {
  sectionData: IAboutSectionFields;
  count: number;
  order: number;
}

// @note Types for File: styles.tsx

export interface DirectionProps {
  _direction: ASD;
}
