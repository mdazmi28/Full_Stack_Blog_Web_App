// import React from 'react';

import {useEffect, useState} from "react";
import {navList} from "../APIRequest/APIRequest.js";

const NavBar = () => {

    const [NavIteam, setNavIteams] = useState([])
    useEffect(() => {
        (async ()=>{
            let res = await navList()
            setNavIteams(res)
        })()
    }, []);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                        {
                            NavIteam.map((item, index) => (
                                <li key={index}><a>{item['navItem']}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    
                    {
                        NavIteam.map((item, index) => (
                            <li key={index}><a>{item['navItem']}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {/*<a className="btn">Button</a>*/}
            </div>
        </div>
    );
};

export default NavBar;