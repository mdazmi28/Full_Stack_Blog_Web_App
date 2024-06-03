// import React from 'react';
import MasterLayout from "../components/MasterLayout.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {blogsDetails} from "../APIRequest/APIRequest.js";
// import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";
import BlogsDetail from "../components/BlogsDetail.jsx"

const BlogDetailsPage = () => {
    let {postId} = useParams();
    const [BlogDetailsPost, setBlogDetailsPost] = useState([])

    useEffect(() => {
        (async ()=>{
            let res = await blogsDetails(postId)
            setBlogDetailsPost(res)
        })()
    }, [postId]);
    return (

        <MasterLayout>
            <div>
                {BlogDetailsPost.length > 0 ? (
                    <BlogsDetail item={BlogDetailsPost} />
                ) : (
                    <Loader /> // Display a loader while fetching data
                )}
            </div>
        </MasterLayout>
    );
};

export default BlogDetailsPage;