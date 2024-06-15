import React from 'react';
import {Link} from "react-router-dom";

const CategoriesList = (props) => {


    return (
        <div className="container mx-auto p-6 bg-gray-100">
            <button className="btn btn-primary">
                <Link to={"/"}>+ADD</Link>
            </button>
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
                        props.items.map((category, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border-b text-zinc-950">{category.category}</td>
                                <td className="px-4 py-2 border-b text-center">
                                    <button
                                        onClick={() => handleUpdate(row.id)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                                    >
                                        Update
                                    </button>
                                </td>
                                <td className="px-4 py-2 border-b text-center">
                                    <button
                                        onClick={() => handleDelete(row.id)}
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
