import { graphql } from "gatsby";
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import MediaList from "../../components/Media/MediaList";

const IndexPage = ({ data }) => {

    const [collection, setCollection] = useState(data.allFile.nodes);

    console.log(collection);

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
      childImageSharp {
        gatsbyImageData
        id
      }
    }
  }
}`