import {Link} from "react-router-dom";

const BlogReadComponent = (props) => {
    return (
        <div className="container mx-auto p-6 bg-gray-100">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 border-b">Category Name</th>
                        <th className="px-4 py-2 border-b">Image</th>
                        <th className="px-4 py-2 border-b">Blog Title</th>
                        <th className="px-4 py-2 border-b">Blog Description</th>
                        <th className="px-4 py-2 border-b">Update</th>
                        <th className="px-4 py-2 border-b">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        // eslint-disable-next-line react/prop-types
                        props.items.map((blogs, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border-b text-zinc-950">{blogs.category_name}</td>
                                <td className="px-4 py-2 border-b text-zinc-950">{blogs.img}</td>
                                <td className="px-4 py-2 border-b text-zinc-950">{blogs.title}</td>
                                <td className="px-4 py-2 border-b text-zinc-950">{blogs.description}</td>
                                <td className="px-4 py-2 border-b text-center">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                                        {/*<Link to={`/update/categories/${blogs['id']}`}>Update</Link>*/}
                                        Update
                                    </button>
                                </td>
                                <td className="px-4 py-2 border-b text-center">
                                    <button
                                        onClick={(e) => handleDelete(blogs['id'])}
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

export default BlogReadComponent;