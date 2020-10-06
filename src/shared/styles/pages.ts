import tw, { styled } from 'twin.macro';

type PageContentWrapperProps = { staticsHeight: number };

// @note Projects Page

export const ProjectsPageContentWrapper = tw.div`w-full p-2 md:p-4`;

// @note Error Page

export const ErrorPageContentWrapper = styled.div<PageContentWrapperProps>`
  ${tw`w-full p-2 md:p-4`}
  min-height: ${({ staticsHeight }) => `calc(100vh - ${staticsHeight}px);`}
`;
