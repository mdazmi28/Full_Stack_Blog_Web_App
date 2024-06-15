import {Link} from "react-router-dom";
import axios from "axios";
import {deleteCategory} from "../../apiRequest/apiServices.js";

const CategoriesList = (props) => {

    const handleDelete = async (id) =>{
        try {
            await deleteCategory(id)
            window.location.reload();
        }catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="container mx-auto p-6 bg-gray-100">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 border-b">Category Name</th>
                        <th className="px-4 py-2 border-b">Update</th>
                        <th className="px-4 py-2 border-b">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        // eslint-disable-next-line react/prop-types
                        props.items.map((category, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border-b text-zinc-950">{category.category}</td>
                                <td className="px-4 py-2 border-b text-center">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                                        <Link to={`/update/categories/${category['id']}`}>Update</Link>
                                    </button>
                                </td>
                                <td className="px-4 py-2 border-b text-center">
                                    <button
                                        onClick={(e) => handleDelete(category['id'])}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoriesList;
