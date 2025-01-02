import React, { useState } from "react";
import Media from "./Media";
import Pager from "../Pager/Pager";

const MediaList = ({ nodes, hasPager = false, itemsPerPage = 6, fancybox = true}) => {

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
            <Pager handler={handleClick} />
            <div className="media-list">
                {displayedImages.map(node => <Media mediaNode={node} key={node.id} fancybox={fancybox} />)}
            </div>
        </>
    );
}

export default MediaList;