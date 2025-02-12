import React from "react";
import { sanitizeURL } from "./helpers/sanitizeURL";

const MediaRender = ({mediaNode, thumbnail}) => {
    let mediaRender;
    if (mediaNode.is_video) {
        console.log(mediaNode);
        switch (mediaNode.file_ext) {
            // special media cases
            case 'mp4': {
                if(thumbnail) {
                    mediaRender = (<video className="video-thumbnail"><source src={mediaNode.imageURL} /></video>);
                } else {
                    mediaRender = (<video className="video" controls><source src={mediaNode.imageURL} /></video>)
                }
                break;
            }
            case 'webm': {
                if(thumbnail) {
                    mediaRender = (<video className="video-thumbnail"><source src={mediaNode.imageURL} /></video>);
                } else {
                    mediaRender = (<video className="video" controls><source src={mediaNode.imageURL} /></video>)
                }
                break;
            }
            default:
                mediaRender = <></>;
        }
    } else {
        // thumbnail image display
        if(thumbnail) {
            mediaRender = (<div className="thumbnail" style={{ backgroundImage: `url(${sanitizeURL(mediaNode.imageURL)}` }}></div>);
        } else {
            mediaRender = (<div className="media-image"><img src={mediaNode.imageURL} alt={mediaNode.name}/></div>);
        }
    }
    return mediaRender;
}

export default MediaRender;