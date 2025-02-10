import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import MediaList from "../../components/Media/MediaList";
import { LOADING_IMAGE } from "../../components/LoadingImage/LOADING_IMAGE";
import { getFromAPI } from "../../util/httpMethods";

const IndexPage = ({ data }) => {
  
  const [collection, setCollection] = useState([LOADING_IMAGE]);

  useEffect(() => {
    getFromAPI('http://localhost:3000/load')
      .then(response => {
        console.log(response);
        setCollection(response);
      });
  }, []);

  return (
    <Layout>
      <h1>External Collection</h1>
      <MediaList nodes={collection} />
    </Layout>
  );

}

export default IndexPage;

export const Head = () => <title>External Collection</title>