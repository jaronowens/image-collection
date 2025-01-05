import React from "react";

const MediaRender = ({mediaNode, thumbnail}) => {
    let mediaRender;
    if (mediaNode.childImageSharp == null) {
        const fileType = mediaNode.extension;
        switch (fileType) {
            // special image cases
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
                mediaRender = <></>;
        }
    } else {
        // thumbnail image display
        if(thumbnail) {
            mediaRender = (<div className="thumbnail" style={{ backgroundImage: `url(${mediaNode.publicURL.replace(' ', '%20')})` }}></div>);
        } else {
            mediaRender = (<div className="media-image"><img src={mediaNode.publicURL} /></div>);
        }
    }
    return mediaRender;
}

export default MediaRender;