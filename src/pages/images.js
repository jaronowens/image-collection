import React from "react";
import { graphql } from "gatsby";
import MediaList from "../components/Media/MediaList";

const ImagePage = ({ data }) => {

    return (
        <>
            <MediaList nodes={data.allFile.nodes} />
        </>
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