import { useState } from 'react';
import {updateCategory} from '../../apiRequest/apiServices.js';
import MasterLayout from "../../components/MasterLayout.jsx";
import { ToastContainer, toast } from "react-toastify"; // Adjust the path if your file structure is different
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate, useParams} from "react-router";

const CategoryUpdatePage = () => {
    const [category, setCategory] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate
    const {id} = useParams();

    const SuccessToast = (msg) => {
        toast.success(msg, {
            position: "top-right"
        });
    };

    const ErrorToast = (msg) => {
        toast.error(msg, {
            position: "top-right"
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (category.length === 0) {
            ErrorToast('Category cannot be empty.');
        }
        try{
            const res = await updateCategory(id, category);
            if (res) {
                SuccessToast('Category created successfully!');
                setTimeout(() => {
                    navigate('/read/categories'); // Navigate to home page after 3 seconds
                }, 3000);
            } else {
                ErrorToast('Failed to create category.');
            }
        }catch(error) {
            console.log(error);
            ErrorToast('Failed to create category.');
        }
    };

    return (
        <MasterLayout>
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit} className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-white">
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                        <input
                            type="text"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            // required
                            className="input input-bordered input-accent w-full mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Update
                    </button>
                </form>
            </div>
            <ToastContainer />
        </MasterLayout>
    );
};

export default CategoryUpdatePage;
