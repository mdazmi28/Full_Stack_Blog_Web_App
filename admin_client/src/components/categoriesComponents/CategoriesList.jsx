import React from 'react';

const CategoriesList = (props) => {
    const { item, handleUpdate, handleDelete } = props;

    return (
        <div className="container mx-auto p-6 bg-white">
            <h1 className="text-2xl font-bold mb-4 text-zinc-950">Categories</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 border-b text-zinc-950">Category Name</th>
                        <th className="px-4 py-2 border-b text-zinc-950">Update</th>
                        <th className="px-4 py-2 border-b text-zinc-950">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {item.map((row) => (
                        <tr key={row.id}>
                            <td className="px-4 py-2 border-b text-zinc-950">{row.category}</td>
                            <td className="px-4 py-2 border-b text-center">
                                <button
                                    onClick={() => handleUpdate(row.id)}
                                    className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-700"
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
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoriesList;
