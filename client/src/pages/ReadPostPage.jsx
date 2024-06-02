import MasterLayout from "../components/MasterLayout.jsx";
// import Loader from "../components/Loader.jsx";
import Card from "../components/Card.jsx";
import {useEffect, useState} from "react";
import {blogs} from "../APIRequest/APIRequest.js";
import Loader from "../components/Loader.jsx";

const ReadPostPage = () => {
    const [Blog, setBlogs] = useState([])

    useEffect(() => {
        (async ()=>{
            let res = await blogs()
            setBlogs(res)
        })()
    }, []);
    return (
        <MasterLayout>
            <div className="container mx-auto">
                {Blog.length > 0 ? (
                    <Card item={Blog} />
                ) : (
                    <Loader /> // Display a loader while fetching data
                )}
            </div>
        </MasterLayout>
    );
};

export default ReadPostPage;