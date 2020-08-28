import tw, { styled } from 'twin.macro';

interface PageContentWrapperProps {
  staticsHeight: number;
}

// GENERAL
export const PageContentWrapper = tw.div`w-full bg-transparent p-2 md:p-4`;

// INDEX PAGE
export const IndexPageNavigatorWrapper = tw.div`w-full h-full min-h-screen`;
export const IndexPageContentWrapper = tw.div`w-full h-screen bg-transparent p-2 md:p-4`;

// ABOUT PAGE
export const AboutPageContentWrapper = tw.div`w-full bg-transparent p-2 md:p-4`;

// PROJECTS PAGE
export const ProjectsPageContentWrapper = tw.div`w-full bg-transparent p-2 md:p-4`;

// ABOUT PAGE
export const BlogPageContentWrapper = styled.div<PageContentWrapperProps>`
  ${tw`w-full bg-transparent p-2 md:p-4`}
  min-height: ${({ staticsHeight }) => `calc(100vh - ${staticsHeight}px);`}
`;
