import React from "react";

const Pager = ({handler}) => {

    return (
        <div className="pager">
            <div className="pager-controls">
                <button className="pager-button" id="prev" onClick={handler}>Previous</button>
                <button className="pager-button" id="next" onClick={handler}>Next</button>
            </div>
        </div>
    );
}
export default Pager;