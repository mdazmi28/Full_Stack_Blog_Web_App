// import React from 'react';

import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

const MasterLayout = (props) => {
    return (
        <div>
            <NavBar/>
            <div className="pt-16">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default MasterLayout;