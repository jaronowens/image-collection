import React from "react";

const Controls = ({ children }) => {

    return (
        <div className="pager">
            <div className="pager-controls">
                <div className="pager-flex-wrap">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default Controls;