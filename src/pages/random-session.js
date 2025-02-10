import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { useStopwatch } from "react-timer-hook";
import Layout from "../components/Layout/Layout";
import MediaList from "../components/Media/MediaList";
import MediaViewer from "../components/Media/MediaViewer";
import Controls from "../components/Controls/Controls";
import Button from "../components/Controls/Button";
import { convertGatsbyNodes } from "../components/Media/helpers/gatsby-node";
import { LOADING_IMAGE } from "../components/LoadingImage/LOADING_IMAGE";

const RandomSessionPage = ({ data }) => {

  let randomizedNodes;

  const randomizeSession = (sessionNodes) => {
    return sessionNodes.sort(function (a, b) { return 0.5 - Math.random() });
  }

  const {
    totalSeconds,
    seconds,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  useEffect(() => {
    randomizedNodes = randomizeSession(convertGatsbyNodes(data.allFile.nodes));
    setMediaNodes(randomizedNodes);
  }, [randomizedNodes]);

  const [mediaNodes, setMediaNodes] = useState(randomizedNodes);
  const [favorites, setFavorites] = useState([]);

  const [imageIndex, setImageIndex] = useState(0);
  const [finishMode, setFinishMode] = useState(false);

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
        const newArray = ([...favorites]);
        if (!isFavorite) {
          newArray.push(mediaNodes[imageIndex]);
          setFavorites(newArray);
        } else {
          // need to make this more accurate.
          // this is error-prone if the displayed image is not the most recent favorite
          newArray.pop();
          setFavorites(newArray);
        }
      break;
      case 'end': 
        setFinishMode(true);
        pause();
      break;
      case 'restart': 
      break;
      default:
        break;
    }
  }

  const displayedImage = mediaNodes ? (mediaNodes[imageIndex]) : LOADING_IMAGE;

  if (seconds > 10) {
    setImageIndex(imageIndex + 1);
    reset();
  }

  const isFavorited = () => {
    let favorited = false;
    favorites.forEach(favorite => {
      if (favorite.id === mediaNodes[imageIndex].id) {
        favorited = true;
      }
    });
    return favorited;
  }

  const isFavorite = isFavorited();

  const randomSessionControls = (
    <Controls>
      <Button id='prev' handler={controlHandler}>Previous</Button>
      <Button id='pause' handler={controlHandler}>{isRunning ? 'Pause' : 'Resume'}</Button>
      <Button id='next' handler={controlHandler}>Next</Button>
      |
      <Button id="favorite" handler={controlHandler}>{isFavorite ? 'Unfavorite' : 'Favorite'}</Button>
      <Button id="end" handler={controlHandler}>Finish Up</Button>
      <Button id="restart" handler={controlHandler}>Restart</Button>
    </Controls>
  );

  return (
    <Layout>
      <h1>Random Session</h1>
      <div>Image Index: {imageIndex}</div>
      <div>Seconds: {seconds}</div>
      {finishMode ? <MediaList nodes={favorites}/> : <MediaViewer node={displayedImage} controls={randomSessionControls} />}
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