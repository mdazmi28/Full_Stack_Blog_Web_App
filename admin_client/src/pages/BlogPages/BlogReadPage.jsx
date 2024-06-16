import  {useEffect, useState} from 'react';
import MasterLayout from "../../components/MasterLayout.jsx";
import {readBlog} from "../../apiRequest/apiServices.js";
import {Link} from "react-router-dom";
import BlogReadComponent from "../../components/BlogComponents/BlogReadComponent.jsx";


const BlogReadPage = () => {
    const [blogs, setBlog] = useState([])

    useEffect(() => {
        (async ()=>{
            let res = await readBlog()
            setBlog(res)
        })()
    }, []);

    return (
        <MasterLayout>
            <div className="container mx-auto p-6 bg-gray-100">
                <button className="btn btn-primary">
                    <Link to="/add/blogs">+ADD</Link>
                </button>
            </div>

            <div className="container mx-auto">
                {
                    blogs.length > 0 ?
                        (<BlogReadComponent items={blogs}/>)
                        : (
                            <span className="loading loading-infinity loading-lg"></span>
                        )
                }
            </div>

        </MasterLayout>
    );
};

export default BlogReadPage;