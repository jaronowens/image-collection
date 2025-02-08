import { graphql } from "gatsby";
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import MediaList from "../../components/Media/MediaList";

const IndexPage = ({ data }) => {

  const intializeCollection = (mediaNodes) => {
    const stateNodes = [];
    mediaNodes.forEach(mediaNode => {
      const workingNode = {
        ...mediaNode,
        values: {
          selected: false,
          rating: 0,
          favorite: false
        }
      };
      stateNodes.push(workingNode);
    });
    return stateNodes;
  };

  const [collection, setCollection] = useState(intializeCollection(data.allFile.nodes));

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