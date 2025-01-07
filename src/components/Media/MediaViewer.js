import React from "react";
import Media from "./Media";
import Controls from "../Controls/Controls";
import Button from "../Controls/Button";

const MediaViewer = ({ node, fancybox = false, controls }) => {

    return (
        <div className="media-viewer">
            <Media mediaNode={node} key={node.id} fancybox={fancybox} />
            {controls ? controls : <></>}
        </div>
    );

}

export default MediaViewer;