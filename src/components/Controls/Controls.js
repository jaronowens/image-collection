import React from "react";

const Controls = ({ handler }) => {

    return (
        <div className="pager">
            <div className="pager-controls">
                <div className="pager-flex-wrap">
                    <button className="pager-button" id="prev" onClick={handler}>Previous</button>
                    <button className="pager-button" id="next" onClick={handler}>Next</button>
                </div>
            </div>
        </div>
    );
}
export default Controls;