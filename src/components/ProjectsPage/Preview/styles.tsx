import tw, { styled } from 'twin.macro';
import Skeleton from 'react-loading-skeleton';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { ProjectDirection as PD } from '../../../shared/types/presentation';
import { DirectionProps } from './types';

export const PreviewWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`flex-col lg:flex-row` : tw`flex-col lg:flex-row-reverse`}
  ${tw`relative w-full p-4 mobile:p-8 mb-2 md:mb-4 last:mb-0 flex bg-offpink`}
`;

export const PreviewWrapperWithFX = styled(PreviewWrapper)`
  ${tw`transition-transform duration-700 ease-in-out cursor-pointer transform hover:scale-105`}
`;

export const ThumbnailWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left
      ? tw`items-center lg:mr-8 lg:items-start`
      : tw`items-center lg:ml-8 lg:items-end`}
  ${tw`w-full lg:w-1/2 mb-4 mobile-only:mb-8 sm:mb-8 lg:mb-0 flex flex-col items-center lg:justify-start`}
`;

export const ThumbnailInfoWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`flex-row justify-start` : tw`flex-row-reverse justify-end`}
  ${tw`w-full mb-2 flex items-center`}
`;

export const OrderNumberWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left
      ? tw`mr-4 md:mr-8 flex-row justify-start`
      : tw`ml-4 md:ml-8 flex-row-reverse justify-end`}
  ${tw`flex items-center`}
`;

export const OrderNumber = styled.p<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`text-left` : tw`text-right`)}
  ${tw`text-charcoal text-6xl md:text-7xl font-lobster-two font-bold leading-normal`}
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--color-Charcoal);
`;

export const OrderNumberSkeleton = OrderNumber.withComponent(Skeleton);

export const TitleAndTypeWrapper = styled.div<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`items-start` : tw`items-end`)}
  ${tw`flex-1 flex flex-col justify-center`}
  & > span {
    width: 100%;
  }
`;

export const Title = styled.p<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`text-left` : tw`text-right`)}
  ${tw`w-full mb-2 text-charcoal text-2xl md:text-3.5xl font-playfair-display font-bold leading-normal`}
`;

export const TitleSkeleton = Title.withComponent(Skeleton);

export const Type = styled.div<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`text-left` : tw`text-right`)}
  ${tw`text-charcoal text-xs md:text-base font-playfair-display font-normal leading-normal`}
`;

export const TypeSkeleton = Type.withComponent(Skeleton);

export const Bold = tw.span`font-bold`;

export const ImageWrapper = styled.div`
  ${tw`w-full p-4 bg-offwhite`}
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
`;

export const Image = styled(Img)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 1;
  opacity: 80%;
  transition: opacity 0.6s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const ContentWrapper = styled.div<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`items-start` : tw`items-end`)}
  ${tw`flex-1 lg:px-8 flex flex-col justify-center`}
`;

export const DescAndTechWrapper = styled.div<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`items-start` : tw`items-end`)}
  ${tw`w-full mb-4 mobile:mb-8 flex flex-col justify-center`}
`;

export const DescriptionWrapper = styled.div<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`items-start` : tw`items-end`)}
  ${tw`w-full mb-2 lg:mb-8 flex flex-col justify-center`}
  & > span {
    width: 100%;
  }
`;

export const DescriptionTitle = styled.p<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`text-left` : tw`text-right`)}
  ${tw`w-full mb-1 lg:mb-2 text-charcoal text-base mobile:text-2xl font-playfair-display font-bold leading-normal`}
`;

export const DescriptionTitleSkeleton = DescriptionTitle.withComponent(Skeleton);

export const Description = styled.p<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`text-left` : tw`text-right`)}
  ${tw`w-full text-charcoal text-xs mobile:text-base font-playfair-display font-normal leading-normal`}
`;

export const DescriptionSkeleton = Description.withComponent(Skeleton);

export const TechnologyWrapper = styled.div<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`items-start` : tw`items-end`)}
  ${tw`w-full flex flex-col justify-center`}
  & > span {
    width: 100%;
  }
`;

export const TechnologyTitle = styled.p<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`text-left` : tw`text-right`)}
  ${tw`w-full mb-2 text-charcoal text-base mobile:text-2xl font-playfair-display font-bold leading-normal`}
`;

export const TechnologyTitleSkeleton = TechnologyTitle.withComponent(Skeleton);

export const Technology = styled.p<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`text-left` : tw`text-right`)}
  ${tw`w-full text-charcoal text-xs mobile:text-base font-playfair-display font-normal leading-normal`}
`;

export const TechnologySkeleton = Technology.withComponent(Skeleton);

export const DividerWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`lg:pr-24 items-start` : tw`lg:pl-24 items-end`}
  ${tw`w-full mb-4 mobile:mb-8 flex flex-col justify-center`}
`;

export const Divider = tw.hr`w-full h-0 mb-2 last:mb-0 border border-charcoal`;

export const LinksWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left
      ? tw`justify-center lg:justify-start`
      : tw`justify-center lg:justify-end`}
  ${tw`w-full flex flex-row items-center`}
`;

export const ExternalLink = styled(OutboundLink)<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`mr-8 last:mr-0` : tw`ml-8`)}
  ${({ _direction }) => _direction !== PD.Left && `&:first-of-type {margin-left: 0}`}
`;

export const LinkText = styled.span<DirectionProps>`
  ${({ _direction }) => (_direction === PD.Left ? tw`text-left` : tw`text-right`)}
  ${tw`hidden lg:block text-charcoal text-base font-playfair-display font-normal leading-normal`}
`;

export const LinkTextSkeleton = LinkText.withComponent(Skeleton);

export const LinkIcon = styled(FontAwesomeIcon)`
  ${tw`block lg:hidden text-charcoal text-3.5xl leading-normal`}
`;

export const LinkIconSkeleton = LinkIcon.withComponent(Skeleton);

export const ArrowIcon = styled(FontAwesomeIcon)<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`absolute right-project-arrow` : tw`absolute left-project-arrow`}
  ${tw` hidden lg:block bottom-project-arrow text-project-arrow`}
  color: transparent;
  & > g g path {
    stroke: var(--color-Charcoal);
    stroke-width: 4;
  }
`;
