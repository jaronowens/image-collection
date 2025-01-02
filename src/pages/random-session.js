import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import MediaViewer from "../components/Media/MediaViewer";

const RandomSessionPage = ({ data }) => {

  const randomizeSession = (sessionNodes) => {
    return sessionNodes.sort(function (a, b) { return 0.5 - Math.random() });
  }

  const [mediaNodes, setMediaNodes] = useState(randomizeSession(data.allFile.nodes));

  const [imageIndex, setImageIndex] = useState(0);

  const advanceIndex = () => {
    if (imageIndex <= mediaNodes.length) {
      setImageIndex(imageIndex + 1);
    }
  }
  setInterval(advanceIndex, 10000);

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