import React from "react";
import Fancybox from "../../vendor/Fancybox";
import MediaRender from "./MediaRender";
import MediaDetail from "./MediaDetail";

const Media = ({ mediaNode, fancybox }) => {

    if (fancybox || mediaNode.extension.includes('mp4') || mediaNode.extension.includes('webm')) {
        return (
            <>
                <Fancybox className="media-item">
                    <a data-fancybox href={`${mediaNode.publicURL}`} data-src={`#${mediaNode.id}`}>
                        <MediaRender mediaNode={mediaNode} thumbnail={true} />
                    </a>
                </Fancybox>
                <MediaDetail mediaNode={mediaNode} />
            </>
        );
    } else {
        return (
            <div className="media-item">
                <MediaRender mediaNode={mediaNode} thumbnail={true} />
            </div>
        );
    }


}

export default Media;