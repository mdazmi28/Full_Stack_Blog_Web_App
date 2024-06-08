import React from 'react';
import AppBar from "./AppBar.jsx";
import Footer from "./Footer.jsx";

const MasterLayout = (props) => {
    return (
        <div>
            <AppBar/>
            <div className="pt-16">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default MasterLayout;