import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import MediaViewer from "../components/Media/MediaViewer";

const RandomSessionPage = ({ data }) => {

  const randomizeSession = (sessionNodes) => {
    return sessionNodes.sort(function (a, b) { return 0.5 - Math.random() });
    /* This uses a compare function. The compare function compares two values in the array (a and b) and sorts them based on whether which is less.
     * Combined with Math.random (which generates a random number between 0 and 1), this successfully randomizes the array. */
  }

  const [mediaNodes, setMediaNodes] = useState(randomizeSession(data.allFile.nodes));

  const [imageIndex, setImageIndex] = useState(0);
  
  console.log(imageIndex);

  const advanceIndex = () => {
    setImageIndex(imageIndex + 1);
  }
  setInterval(advanceIndex, 5000);

  const displayedImage = mediaNodes[imageIndex];

  return (
    <Layout>
      <h1>Random Session</h1>
      <MediaViewer node={displayedImage} />
    </Layout>
  );
}

export default RandomSessionPage;

export const Head = () => <title>Random Session</title>

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