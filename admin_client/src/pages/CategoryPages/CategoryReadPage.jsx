import {useEffect, useState} from 'react';
import {readCategory} from "../../apiRequest/apiServices.js";
import MasterLayout from "../../components/MasterLayout.jsx";
import CategoryReadComponent from "../../components/CategoryComponents/CategoryReadComponent.jsx";
import FullScreenLoader from "../../components/FullScreenLoader.jsx";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

const CategoryReadPage = () => {
    const [category, setCategory] = useState([])

    const ErrorToast = (msg) => {
        toast.error(msg, {
            position: "top-right"
        });
    };

    useEffect(() => {
        (async ()=>{
            let res = await readCategory()
            setCategory(res)
        })()
    }, []);
    return (
        <MasterLayout>
            <div className="container mx-auto p-6 bg-gray-100">
                <button className="btn btn-primary">
                    <Link to="/add/categories">+ADD</Link>
                </button>
            </div>

            <div className="container mx-auto">
                {
                    category.length > 0 ?
                        (<CategoryReadComponent items={category}/>)
                            : (
                                ErrorToast("No Categories")
                            )
                    }
                </div>

        </MasterLayout>
);
};

export default CategoryReadPage;