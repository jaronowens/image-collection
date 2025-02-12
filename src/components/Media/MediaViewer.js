import React from "react";
import Media from "./Media";

const MediaViewer = ({ node, fancybox = false, controls }) => {

    return (
        <div className="media-viewer">
            <Media mediaNode={node} key={node.id} fancybox={fancybox} thumbnail={false} />
            {controls ? controls : <></>}
        </div>
    );

}

export default MediaViewer;