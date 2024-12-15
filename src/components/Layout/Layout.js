import React from "react";
import "../../sass/styles.scss";

const Layout = ({sidebar, children}) => {

    return(
        <div className="page-layout">
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;