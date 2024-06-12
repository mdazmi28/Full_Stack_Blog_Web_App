import { useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import MasterLayout from "../../components/MasterLayout.jsx";
import { postCategory } from "../../apiRequest/apiServices.js";
import { toast, ToastContainer } from "react-toastify";
import FullScreenLoader from "../../components/FullScreenLoader.jsx";

const CategoriesAddPage = () => {
    const categoryRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const ErrorToast = (msg) => {
        toast.error(msg, {
            position: "top-right"
        });
    };

    const SuccessToast = (msg) => {
        toast.success(msg, {
            position: "top-right"
        });
    };

    const SaveData = async () => {
        const categoryName = categoryRef.current.value;
        console.log("Category Name:", categoryName); // Debugging log

        if (categoryName.length === 0) {
            ErrorToast("The field is empty!");
        } else {
            setIsLoading(true); // Show loader
            try {
                const result = await postCategory(categoryName);
                console.log("Post Result:", result); // Debugging log

                if (result) {
                    SuccessToast("Category added successfully!");
                    categoryRef.current.value = ''; // Clear the input field
                } else {
                    ErrorToast("Something went wrong!");
                }
            } catch (err) {
                console.error("Error posting category:", err); // Debugging log
                ErrorToast("Something went wrong!");
            } finally {
                setIsLoading(false); // Hide loader
            }
        }
    };

    return (
        <MasterLayout>
            <div className="container mx-auto grid justify-items-center">
                <div className="row">
                    <div className="col-12">
                        <input
                            ref={categoryRef}
                            type="text"
                            placeholder="Enter category name"
                            className="input input-bordered input-success w-full max-w-full required"
                        />
                    </div>
                    <div className="col-12 pt-20">
                        <button onClick={SaveData} className="btn btn-success">Save</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
            {isLoading && <FullScreenLoader />}
        </MasterLayout>
    );
};

export default CategoriesAddPage;
