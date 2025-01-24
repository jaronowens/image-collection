import React, { useEffect, useState, useRef } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import MediaViewer from "../components/Media/MediaViewer";
import Controls from "../components/Controls/Controls";
import Button from "../components/Controls/Button";

import loadingGif from "../images/loading.gif";

const RandomSessionPage = ({ data }) => {

  let randomizedNodes;

  const randomizeSession = (sessionNodes) => {
    return sessionNodes.sort(function (a, b) { return 0.5 - Math.random() });
  }

  const loadingImage = {
    childImageSharp: null,
    extension: 'jpg',
    id: 'placeholder',
    name: 'placeholder',
    publicURL: loadingGif
  };

  useEffect(() => {
    randomizedNodes = randomizeSession(data.allFile.nodes);
    setMediaNodes(randomizedNodes);
  }, [randomizedNodes]);

  const [mediaNodes, setMediaNodes] = useState(randomizedNodes);

  const [imageIndex, setImageIndex] = useState(0);

  const [slideTimer, setSlideTimer] = useState(0);

  const controlHandler = (event) => {
    switch(event.target.id) {
      case 'prev': 
        setImageIndex(imageIndex - 1);
      break;
      case 'pause': 
      break;
      case 'next':
        setImageIndex(imageIndex + 1);
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

  // const advanceIndex = () => {
  // //   if (imageIndex <= mediaNodes.length) {
  // //     setImageIndex(imageIndex + 1);
  // //   }
  // // }
  // setInterval(advanceIndex, 10000);

  // const incrementTimer = () => {
  //   setSlideTimer(slideTimer + 1);
  // }

  // setInterval(incrementTimer, 1000);

  // if (slideTimer >= 100) {
  //   setImageIndex(imageIndex + 1);
  //   setSlideTimer(0);
  // }

  const displayedImage = mediaNodes ? (mediaNodes[imageIndex]) : loadingImage;


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
      <div>Image Index: {imageIndex}</div>
      <div>Slide Timer: {slideTimer}</div>
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