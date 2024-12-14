import React from "react";
import Media from "./Media";

const MediaList = ({nodes}) => {
    
    return(
        <div className="media-list">
            {nodes.map(node => <Media mediaNode={node} key={node.id}/>)}
        </div>
    );
}

export default MediaList;