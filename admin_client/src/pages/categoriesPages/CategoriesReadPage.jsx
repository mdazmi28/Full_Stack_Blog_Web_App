// import React from 'react';
import MasterLayout from "../../components/MasterLayout.jsx";
import {useEffect, useState} from "react";
import {readCategory} from "../../apiRequest/apiServices.js";
import FullScreenLoader from "../../components/FullScreenLoader.jsx";
import CategoriesList from "../../components/categoriesComponents/CategoriesList.jsx";


const CategoriesReadPage = () => {
    const [Category, setCategory] = useState([])

    useEffect(() => {
        (async ()=>{
            let res = await readCategory()
            setCategory(res)
        })()
    }, []);
    return (
        <MasterLayout>
            <div className="container mx-auto">
                {Category.length > 0 ? (
                    // eslint-disable-next-line react/no-unknown-property
                    <CategoriesList item={Category} />
                ) : (
                    <FullScreenLoader/>
                )}
            </div>
        </MasterLayout>
    );
};

export default CategoriesReadPage;