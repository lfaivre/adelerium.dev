import { ProjectAttrs } from '../../../types/projects';
import { ProjectDirection as PD } from '../../../types/presentation';

// @note Types for File: index.tsx

export interface PreviewProps {
  project: ProjectAttrs;
}

// type FluidQuery = FluidObject | FluidObject[];
// type ChildImageSharpQuery = { fluid: FluidQuery };
// type ProfileQuery = { childImageSharp: ChildImageSharpQuery };
// export type GraphQLStaticQuery = { profile: ProfileQuery };

// @note Types for File: styles.tsx

export interface DirectionProps {
  _direction: PD;
}
