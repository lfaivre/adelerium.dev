import tw, { styled } from 'twin.macro';

// @temp Disabling incorrect linting error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface PageContentWrapperProps {
  staticsHeight: number;
}

// @note Index Page

export const IndexPageNavigatorWrapper = tw.div`w-full h-full min-h-screen`;
export const IndexPageContentWrapper = tw.div`w-full h-screen p-2 md:p-4`;

// @note About Page

export const AboutPageContentWrapper = tw.div`w-full p-2 md:p-4`;

// @note Projects Page

export const ProjectsPageContentWrapper = tw.div`w-full p-2 md:p-4`;

// @note About Page

export const BlogPageContentWrapper = styled.div<PageContentWrapperProps>`
  ${tw`w-full p-2 md:p-4`}
  min-height: ${({ staticsHeight }) => `calc(100vh - ${staticsHeight}px);`}
`;

// @note Error Page

export const ErrorPageContentWrapper = styled.div<PageContentWrapperProps>`
  ${tw`w-full p-2 md:p-4`}
  min-height: ${({ staticsHeight }) => `calc(100vh - ${staticsHeight}px);`}
`;