import React from "react";

const MediaRender = ({mediaNode, thumbnail}) => {
    let mediaRender;
    if (mediaNode.childImageSharp == null) {
        const fileType = mediaNode.extension;
        switch (fileType) {
            // special media cases
            case 'mp4': {
                if(thumbnail) {
                    mediaRender = (<video className="video-thumbnail"><source src={mediaNode.publicURL} /></video>);
                } else {
                    mediaRender = (<video className="video" autoPlay controls><source src={mediaNode.publicURL} /></video>)
                }
                break;
            }
            case 'gif': {
                if(thumbnail) {
                    mediaRender = (<div className="thumbnail gif" style={{ backgroundImage: `url(${mediaNode.publicURL.replace(' ', '%20')})` }}></div>);
                } else {
                    mediaRender = (<div className="media-image"><img src={mediaNode.publicURL} alt={mediaNode.name}/></div>);
                }
                break;
            }
            case 'webm': {
                if(thumbnail) {
                    mediaRender = (<video className="video-thumbnail"><source src={mediaNode.publicURL} /></video>);
                } else {
                    mediaRender = (<video className="video" autoPlay controls><source src={mediaNode.publicURL} /></video>)
                }
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
            mediaRender = (<div className="media-image"><img src={mediaNode.publicURL} alt={mediaNode.name}/></div>);
        }
    }
    return mediaRender;
}

export default MediaRender;