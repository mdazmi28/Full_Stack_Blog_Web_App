import {useEffect, useState} from 'react';
import {readCategory} from "../../apiRequest/apiServices.js";
import MasterLayout from "../../components/MasterLayout.jsx";
import CategoryReadComponent from "../../components/CategoryComponents/CategoryReadComponent.jsx";
import FullScreenLoader from "../../components/FullScreenLoader.jsx";

const CategoryReadPage = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        (async ()=>{
            let res = await readCategory()
            setCategory(res)
        })()
    }, []);
    return (
        <MasterLayout>
            <div className="container mx-auto">
                {
                    category.length > 0 ?
                        (<CategoryReadComponent items={category} />)
                        : (
                            <FullScreenLoader/>
                        )
                }
            </div>

        </MasterLayout>
    );
};

export default CategoryReadPage;