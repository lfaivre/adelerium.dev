import React from 'react';
import { PageProps, graphql } from 'gatsby';

import { SEO } from '../components/Shared/SEO';
import { AboutSection } from '../components/AboutPage/AboutSection';

import { PageQueryData } from '../types/about';
import { AboutPageContentWrapper } from '../styles/pages';

const AboutPage = ({ data }: PageProps): JSX.Element => {
  const aboutSections = (data as PageQueryData).allContentfulAboutSection.edges;
  const aboutSectionsLength = aboutSections.length;

  return (
    <>
      <SEO title="About" />
      <AboutPageContentWrapper>
        {aboutSections.map(({ node }, index) => {
          return (
            <AboutSection
              sectionData={node}
              count={aboutSectionsLength}
              order={index + 1}
              key={node.title}
            />
          );
        })}
      </AboutPageContentWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AboutPage;

export const pageQuery = graphql`
  query AboutPageQuery {
    allContentfulAboutSection(sort: { fields: order, order: ASC }) {
      edges {
        node {
          title
          order
          body {
            body
          }
          firstLinkTextFragment
          secondLinkTextFragment
          link {
            title
            type
            destination
          }
          accentImage {
            fluid(maxWidth: 480, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
