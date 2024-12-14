import React from "react";

const ImageViewer = ({images}) => {
    return(
        <div className="image-viewer">
            {images.map(image => <img src={image} />)}
        </div>
    );
}

export default ImageViewer;