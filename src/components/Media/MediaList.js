import React, { useState } from "react";
import Media from "./Media";
import Controls from "../Controls/Controls";
import Button from "../Controls/Button";

const MediaList = ({ nodes, hasPager = false, itemsPerPage = 6, fancybox = true }) => {

    const [page, setPage] = useState(0);
    let displayedImages;

    const handleClick = (event) => {
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
            {hasPager ?
                <Controls>
                    <Button id='prev' handler={handleClick}>Previous</Button>
                    <Button id='next' handler={handleClick}>Next</Button>
                </Controls>
                : <></>}
            <div className="media-list">
                {displayedImages.map(node => <Media mediaNode={node} key={node.id} fancybox={fancybox} />)}
            </div>
        </>
    );
}

export default MediaList;