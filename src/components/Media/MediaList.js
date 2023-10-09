import React from "react";
import Media from "./Media";

const MediaList = ({nodes}) => {
    
    return(
        <div className="imageList">
            {nodes.map(node => <Media mediaNode={node}/>)}
        </div>
    );
}

export default MediaList;