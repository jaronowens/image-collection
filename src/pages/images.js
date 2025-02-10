import React from "react";
import { graphql } from "gatsby";
import MediaList from "../components/Media/MediaList";
import Layout from "../components/Layout/Layout";
import { convertGatsbyNodes } from "../components/Media/helpers/gatsby-node";

const ImagePage = ({ data }) => {
  const newNodes = convertGatsbyNodes(data.allFile.nodes);
    return (
        <Layout>
            <MediaList nodes={newNodes} hasPager={true} itemsPerPage={12} gallery={'images'}/>
        </Layout>
    );
}

export default ImagePage;

export const Head = () => <title>Images</title>

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