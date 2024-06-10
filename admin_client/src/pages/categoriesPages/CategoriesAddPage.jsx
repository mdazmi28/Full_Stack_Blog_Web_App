// import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import MasterLayout from "../../components/MasterLayout.jsx";
import {useRef} from "react";

import {postCategory} from "../../apiRequest/apiServices.js";
import {toast, ToastContainer } from "react-toastify";


const CategoriesAddPage = () => {
    let category = useRef()

    const ErrorToast = (msg) => {
        toast.error(msg, {
            position: "bottom-right"
        });
    };


    const SaveData = ()=>{
        let categoryName = category.value
        // alert(categoryName.length)
        if(categoryName.length === 0){
            ErrorToast("The Field is empty!")
        }else {
            postCategory(

            )
        }
    }
    return (
        <MasterLayout>
            <div className="container mx-auto grid justify-items-center">
                <div className="row">
                    <div className="col-12">
                        <input
                            ref={(input)=>
                            category = input
                        } type="text" placeholder="" className="input input-bordered input-success w-full max-w-full required"/>
                    </div>
                    <div className="col-12 pt-20">
                        <button onClick={SaveData} className="btn btn-success">Success</button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </MasterLayout>
    );
};

export default CategoriesAddPage;