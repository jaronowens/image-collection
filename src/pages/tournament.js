import React from "react";
import { graphql } from "gatsby";
import MediaList from "../components/Media/MediaList";
import Layout from "../components/Layout/Layout";

const TournamentPage = ({ data }) => {

    return (
        <Layout>
          <h1>Image Collection</h1>
            <MediaList nodes={data.allFile.nodes} />
        </Layout>
    );
}

export default TournamentPage;

export const Head = () => <title>Tournament</title>

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