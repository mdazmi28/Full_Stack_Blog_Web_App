import MasterLayout from "../components/MasterLayout.jsx";
// import Loader from "../components/Loader.jsx";
import Card from "../components/Card.jsx";
import {useEffect, useState} from "react";
import {posts} from "../APIRequest/APIRequest.js";
import Loader from "../components/Loader.jsx";

const ReadPostPage = () => {
    const [Posts, setPosts] = useState([])

    useEffect(() => {
        (async ()=>{
            let res = await posts()
            setPosts(res)
        })()
    }, []);
    return (
        <MasterLayout>
            <div className="container mx-auto">
                {Posts.length > 0 ? (
                    <Card item={Posts} />
                ) : (
                    <Loader /> // Display a loader while fetching data
                )}
            </div>
        </MasterLayout>
    );
};

export default ReadPostPage;