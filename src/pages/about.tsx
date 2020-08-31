import React from 'react';
import { PageProps, graphql } from 'gatsby';

import { SEO } from '../components/Shared/SEO';
import { AboutSection } from '../components/AboutPage/AboutSection';

import { AboutSectionData } from '../data/about';

import { AboutPageContentWrapper } from '../styles/pages';

// @todo Will fix about section when contentful integration is complete

const AboutPage = ({ data }: PageProps): JSX.Element => {
  return (
    <>
      <SEO title="About" />
      <AboutPageContentWrapper>
        {AboutSectionData.sections.map((sectionData) => {
          // TODO: TEMPORARY IMPLEMENTATION, REPLACING WITH CONTENTFUL GRAPHQL QUERIES
          sectionData.tempQuery = (data as any)[sectionData.pictureURL];
          return (
            <AboutSection
              sectionData={sectionData}
              count={AboutSectionData.count()}
              key={sectionData.order}
            />
          );
        })}
      </AboutPageContentWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AboutPage;

export const fluidImageAbout = graphql`
  fragment fluidImageAbout on File {
    childImageSharp {
      fluid(maxWidth: 480, grayscale: true, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "about/motorized-480.jpg" }) {
      ...fluidImageAbout
    }
    imageTwo: file(relativePath: { eq: "about/tram-480.jpg" }) {
      ...fluidImageAbout
    }
    imageThree: file(relativePath: { eq: "about/cablecars-480.jpg" }) {
      ...fluidImageAbout
    }
  }
`;
