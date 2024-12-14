import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const Media = ({mediaNode}) => {
    // add conditonal logic here to separate image display from gifs or videos

    return(
        <GatsbyImage image={getImage(mediaNode.childImageSharp)} alt={mediaNode.childImageSharp.id} />
    );
}

export default Media;