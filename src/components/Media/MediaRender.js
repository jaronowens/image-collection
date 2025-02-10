import React from "react";

const MediaRender = ({mediaNode, thumbnail}) => {
    let mediaRender;
    if (mediaNode.is_video) {
        console.log(mediaNode);
        switch (mediaNode.file_extension) {
            // special media cases
            case 'mp4': {
                if(thumbnail) {
                    mediaRender = (<video className="video-thumbnail"><source src={mediaNode.imageURL} /></video>);
                } else {
                    mediaRender = (<video className="video" autoPlay controls><source src={mediaNode.imageURL} /></video>)
                }
                break;
            }
            case 'webm': {
                if(thumbnail) {
                    mediaRender = (<video className="video-thumbnail"><source src={mediaNode.imageURL} /></video>);
                } else {
                    mediaRender = (<video className="video" autoPlay controls><source src={mediaNode.imageURL} /></video>)
                }
                break;
            }
            default:
                mediaRender = <></>;
        }
    } else {
        // thumbnail image display
        if(thumbnail) {
            mediaRender = (<div className="thumbnail" style={{ backgroundImage: `url(${mediaNode.imageURL}` }}></div>);
        } else {
            mediaRender = (<div className="media-image"><img src={mediaNode.imageURL} alt={mediaNode.name}/></div>);
        }
    }
    return mediaRender;
}

export default MediaRender;