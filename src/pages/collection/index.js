import { graphql } from "gatsby";
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import MediaList from "../../components/Media/MediaList";
import { convertGatsbyNodes } from "../../components/Media/helpers/gatsby-node";

const IndexPage = ({ data }) => {

  const collection = convertGatsbyNodes(data.allFile.nodes);

  return (
    <Layout>
      <h1>Your Collection</h1>
      <MediaList nodes={collection} />
    </Layout>
  );

}

export default IndexPage;

export const Head = () => <title>Your Collection</title>

export const query = graphql`
query queryImages {
  allFile {
    nodes {
      publicURL
      id
      name
      childImageSharp {
        id
        gatsbyImageData
      }
      extension
    }
  }
}`