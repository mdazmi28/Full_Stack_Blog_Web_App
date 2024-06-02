const Card = (props) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                // eslint-disable-next-line react/prop-types
                props.item.map((item, index) => (
                    <div key={index}>
                        <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <p>{item['description']}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;
