import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {
                // eslint-disable-next-line react/prop-types
                props.item.map((item, index) => (
                    <Link key={index.toString()} to={"/details/"+item['id']}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={item['img']} alt={item['img_description']}/></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item['title']}</h2>
                                <p>{item['description']}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Card;
