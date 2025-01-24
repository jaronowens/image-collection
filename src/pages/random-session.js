import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { useStopwatch } from "react-timer-hook";
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

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  useEffect(() => {
    randomizedNodes = randomizeSession(data.allFile.nodes);
    setMediaNodes(randomizedNodes);
  }, [randomizedNodes]);

  const [mediaNodes, setMediaNodes] = useState(randomizedNodes);

  const [imageIndex, setImageIndex] = useState(0);

  const controlHandler = (event) => {
    switch(event.target.id) {
      case 'prev': 
        setImageIndex(imageIndex - 1);
        reset();
      break;
      case 'pause':
        if(isRunning) {
          pause();
        } else {
          start();
        }
      break;
      case 'next':
        setImageIndex(imageIndex + 1);
        reset();
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

  const displayedImage = mediaNodes ? (mediaNodes[imageIndex]) : loadingImage;

  if (seconds > 10) {
    setImageIndex(imageIndex + 1);
    reset();
  }

  const randomSessionControls = (
    <Controls>
      <Button id='prev' handler={controlHandler}>Previous</Button>
      <Button id='pause' handler={controlHandler}>{isRunning ? 'Pause' : 'Resume'}</Button>
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
      <div>Seconds: {seconds}</div>
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