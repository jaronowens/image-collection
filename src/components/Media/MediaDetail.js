import React from "react";
import MediaRender from "./MediaRender";

const MediaDetail = ({ mediaNode }) => {

    return (
        <div className="media-detail" id={mediaNode.id}>
            <div className="detail-wrapper">
                <MediaRender mediaNode={mediaNode} />
                <div className="detail-content">
                    This is where the content for a detailed image view will go.
                </div>
            </div>
        </div>
    );
}
export default MediaDetail;