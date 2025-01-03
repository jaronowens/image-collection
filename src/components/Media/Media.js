// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Fancybox from "../../vendor/Fancybox";

const Media = ({ mediaNode, fancybox }) => {
    // add conditonal logic here to separate image display from gifs or videos
    let mediaRender;

    // check if the image is something GatsbyImage cannot render
    if (mediaNode.childImageSharp == null) {
        const fileType = mediaNode.extension;
        switch (fileType) {
            case 'mp4': {
                mediaRender = (<video className="video-thumbnail"><source src={mediaNode.publicURL} /></video>);
                break;
            }
            case 'gif': {
                mediaRender = (<div className="thumbnail gif" style={{ backgroundImage: `url(${mediaNode.publicURL.replace(' ', '%20')})` }}></div>);
                break;
            }
            case 'webm': {
                mediaRender = (<video className="video-thumbnail"><source src={mediaNode.publicURL} /></video>);
                break;
            }
            default:
                mediaRender = null;
        }
    } else {
        // mediaRender = (<GatsbyImage image={getImage(mediaNode.childImageSharp)} alt={mediaNode.name} />);
        // mediaRender = (<img src={mediaNode.publicURL} alt={mediaNode.name} />);
        mediaRender = (<div className="thumbnail" style={{ backgroundImage: `url(${mediaNode.publicURL.replace(' ', '%20')})` }}></div>);
    }

    if (mediaRender) {
        if (fancybox || mediaNode.extension.includes('mp4') || mediaNode.extension.includes('webm')) {
            return (
                <Fancybox className="media-item">
                    <a data-fancybox href={mediaNode.publicURL} data-src={mediaNode.publicURL}>
                        {mediaRender}
                    </a>
                </Fancybox>
            );
        } else {
            return (
                <div className="media-item">
                    {mediaRender}
                </div>
            );
        }
    } else {
        // something went wrong with the media node, skip this one
        return (<></>);
    }

}

export default Media;