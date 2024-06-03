// import React from 'react';

import MasterLayout from "../components/MasterLayout.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {blogsByCategory} from "../APIRequest/APIRequest.js";
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";

const ByCategory = () => {
    let {categoryId} = useParams();
    // alert(categoryId)
    const [BlogByCategory, setBlogsByCategory] = useState([])

    useEffect(() => {
        (async ()=>{
            let res = await blogsByCategory(categoryId)
            setBlogsByCategory(res)
        })()
    }, [categoryId]);
    return (
        <MasterLayout>
            <div className="container mx-auto">
                {BlogByCategory.length > 0 ? (
                    <Card item={BlogByCategory}/>
                ) : (
                    <Loader/> // Display a loader while fetching data
                )}
            </div>
        </MasterLayout>
    );
};

export default ByCategory;