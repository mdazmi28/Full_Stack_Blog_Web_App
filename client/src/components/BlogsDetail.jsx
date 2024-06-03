const BlogsDetail = (props) => {
    return (
        <div  className="container mx-auto my-16 p-9">
            <div  className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
                {/* eslint-disable-next-line react/prop-types */}
                {props.item.map((item, index) => (
                            <div key={index.toString()} className="card w-100 glass">
                                <figure><img src={item['img']} alt="car!"/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item['title']}</h2>
                                    <p>{item['description']}</p>
                                </div>
                            </div>

                ))}
        </div>
        </div>

    );
};

export default BlogsDetail;


