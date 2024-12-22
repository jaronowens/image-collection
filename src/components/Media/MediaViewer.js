import React from "react";
import Media from "./Media";

const MediaViewer = ({ node }) => {

    return (
        <div className="media-viewer">
            <Media mediaNode={node} id={node.id} />
        </div>
    );

}

export default MediaViewer;