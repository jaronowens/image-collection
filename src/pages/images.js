import React from "react";
import { graphql } from "gatsby";
import MediaList from "../components/Media/MediaList";
import Layout from "../components/Layout/Layout";

const ImagePage = ({ data }) => {

    return (
        <Layout>
          <h1>Image Collection</h1>
            <MediaList nodes={data.allFile.nodes} />
        </Layout>
    );
}

export default ImagePage;

export const Head = () => <title>Images</title>

export const query = graphql`
query QueryImages {
  allFile {
    nodes {
      publicURL
      childImageSharp {
        gatsbyImageData
      }
    }
  }
}`