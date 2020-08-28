import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from '../components/Shared/SEO';
import Message from '../components/404Page/Message';

// import notFoundSVG from '../images/not_found.svg';
// console.log(notFoundSVG);

// @todo Temporary implementation of 404 page, need to fix

import { PageContentWrapperError } from '../styles/pages';

// export const query = graphql`
//   query MyQuery {
//     file(relativePath: { eq: "not_found.svg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         fluid(maxWidth: 375, quality: 75) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Not found" />
      <PageContentWrapperError>
        <Message />
        {/* <Img fluid={data.file.publicURL.fluid} /> */}
      </PageContentWrapperError>
    </>
  );
};

export default NotFoundPage;
