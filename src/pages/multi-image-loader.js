import React from "react";
import { useState } from "react";
import ImageViewer from "../components/ImageViewer/ImageViewer";
import { getFile } from "../util/getFile";

const MultiImageLoader = () => {

    const handleClick = async () => {
        const result = getFile();
        setFile(result);
    }

    const [file, setFile] = useState();

    return (
        <>
            <div className="content-header">
                <h1>Multi-Image Loader</h1>
                <p>Loads in multiple images from a file picker and displays them in a flex grid.</p>
                <button className="image-picker" onClick={handleClick}>Pick a File</button>
                {file}
            </div>
            <ImageViewer images={[file]}/>
        </>
    );
}
export default MultiImageLoader;