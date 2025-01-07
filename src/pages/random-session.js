import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import MediaViewer from "../components/Media/MediaViewer";
import Controls from "../components/Controls/Controls";
import Button from "../components/Controls/Button";

const RandomSessionPage = ({ data }) => {

  const randomizeSession = (sessionNodes) => {
    return sessionNodes.sort(function (a, b) { return 0.5 - Math.random() });
  }


  const [mediaNodes, setMediaNodes] = useState(randomizeSession(data.allFile.nodes));

  const [imageIndex, setImageIndex] = useState(0);

  const [slideTimer, setSlideTimer] = useState(0);

  const controlHandler = (event) => {
    switch(event.target.id) {
      case 'prev': 
      break;
      case 'pause': 
      break;
      case 'next': 
      break;
      case 'favorite': 
      break;
      case 'end': 
      break;
      case 'restart': 
      break;
      default:
        break;
    }
  }

  const advanceIndex = () => {
    if (imageIndex <= mediaNodes.length) {
      setImageIndex(imageIndex + 1);
    }
  }
  setInterval(advanceIndex, 10000);

  const displayedImage = mediaNodes[imageIndex];

  const randomSessionControls = (
    <Controls>
      <Button id='prev' handler={controlHandler}>Previous</Button>
      <Button id='pause' handler={controlHandler}>Pause</Button>
      <Button id='next' handler={controlHandler}>Next</Button>
      |
      <Button id="favorite" handler={controlHandler}>Favorite</Button>
      <Button id="end" handler={controlHandler}>Finish Up</Button>
      <Button id="restart" handler={controlHandler}>Restart</Button>
    </Controls>
  );

  return (
    <Layout>
      <h1>Random Session</h1>
      <MediaViewer node={displayedImage} controls={randomSessionControls} />
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