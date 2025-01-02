import React from "react";
import Media from "./Media";

const MediaViewer = ({ node, fancybox = false }) => {

    return (
        <div className="media-viewer">
            <Media mediaNode={node} key={node.id} fancybox={fancybox}/>
        </div>
    );

}

export default MediaViewer;