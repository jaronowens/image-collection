import { graphql } from "gatsby";
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import MediaList from "../../components/Media/MediaList";

const IndexPage = ({ data }) => {

    const [collection, setCollection] = useState(data.allFile.nodes);

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