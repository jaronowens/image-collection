import React from "react";
import Fancybox from "../../vendor/Fancybox";
import MediaRender from "./MediaRender";
import MediaDetail from "./MediaDetail";

const Media = ({ mediaNode, fancybox, thumbnail = true }) => {

    if (fancybox) {
        return (
            <>
                <Fancybox className="media-item">
                    <a data-fancybox href={`${mediaNode.publicURL}`} data-src={`#${mediaNode.id}`}>
                        <MediaRender mediaNode={mediaNode} thumbnail={thumbnail} />
                    </a>
                </Fancybox>
                <MediaDetail mediaNode={mediaNode} />
            </>
        );
    } else {
        return (
            <div className="media-item">
                <MediaRender mediaNode={mediaNode} thumbnail={thumbnail} />
            </div>
        );
    }


}

export default Media;