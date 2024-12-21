// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Fancybox from "../../vendor/Fancybox";

const Media = ({ mediaNode, galleryName }) => {
    // add conditonal logic here to separate image display from gifs or videos
    let mediaRender;

    // check if the image is something GatsbyImage cannot render
    if (mediaNode.childImageSharp == null) {
        const fileType = mediaNode.extension;
        switch (fileType) {
            case 'mp4': {
                mediaRender = (<video><source src={mediaNode.publicURL} /></video>);
                break;
            }
            case 'gif': {
                mediaRender = (<img src={mediaNode.publicURL} alt={mediaNode.name} />);
                break;
            }
            case 'webm': {
                mediaRender = (<video><source src={mediaNode.publicURL} /></video>);
                break;
            }
            default:
                mediaRender = null;
        }
    } else {
        // mediaRender = (<GatsbyImage image={getImage(mediaNode.childImageSharp)} alt={mediaNode.name} />);
        mediaRender = (<img src={mediaNode.publicURL} alt={mediaNode.name} />);
    }

    console.log(mediaNode);

    if (mediaRender) {
        return (
            <Fancybox className="media-item">
                <a data-fancybox={galleryName} href={mediaNode.publicURL} data-src={mediaNode.publicURL}>
                    {mediaRender}
                </a>
            </Fancybox>
        );
    } else {
        return(<></>);
    }

}

export default Media;