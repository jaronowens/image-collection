import React, { useState } from "react";
import Media from "./Media";

const MediaList = ({ nodes, hasPager = false, itemsPerPage = 6}) => {

    const [page, setPage] = useState(0);
    let displayedImages;

    const handleClick = (event) => {
        console.log(event.target.id);
        switch (event.target.id) {
            case 'prev':
                setPage(page - itemsPerPage);
                break;
            case 'next':
                setPage(page + itemsPerPage);
                break;
            default:
                break;
        }

    }

    if (hasPager) {
        displayedImages = nodes.slice(page, (page + itemsPerPage));
    } else {
        displayedImages = nodes;
    }


    return (
        <>
            <div className="controls">
                <button id="prev" onClick={handleClick}>Previous</button>
                <button id="next" onClick={handleClick}>Next</button>
            </div>
            <div className="media-list">
                {displayedImages.map(node => <Media mediaNode={node} key={node.id} />)}
            </div>
        </>
    );
}

export default MediaList;