import {useEffect, useState} from 'react';
import MasterLayout from "../../components/MasterLayout.jsx";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {postBlog, readCategory} from "../../apiRequest/apiServices.js";
import {useNavigate} from "react-router";

const BlogAddPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImages] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async ()=>{
            const res = await readCategory();
            if (res) {
                setCategories(res);
            }
        })()
    }, []);

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
        if (title.length === 0 || description.length === 0 || img.length === 0 || category === '') {
            ErrorToast("All fields are required");
            return;
        }

        try {
            const res = await postBlog(title, description, img, category);
            if (res) {
                SuccessToast('Blog created successfully!');
                setTimeout(() => {
                    navigate('/read/blogs'); // Navigate to home page after 3 seconds
                }, 3000);
            } else {
                ErrorToast('Failed to create blog.');
            }
        } catch (error) {
            console.error('Error creating blog:', error);
            ErrorToast('Failed to create blog.');
        }
    };

    return (
        <MasterLayout>
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit} className="w-full max-w-md p-8 space-y-2 rounded-lg shadow-lg bg-white">
                    <div className="title">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="input input-bordered input-accent w-full mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="description">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                        <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="input input-bordered input-accent w-full mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="images">
                        <label htmlFor="img" className="block text-sm font-medium text-gray-700">Image Link:</label>
                        <input
                            type="text"
                            id="img"
                            value={img}
                            onChange={(e) => setImages(e.target.value)}
                            className="input input-bordered input-accent w-full mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="category">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="input input-bordered input-accent w-full mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select a category</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.category}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <ToastContainer/>
        </MasterLayout>
    );
};

export default BlogAddPage;
