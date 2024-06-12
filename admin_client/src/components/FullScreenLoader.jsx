import loader from "../assets/img/loader.svg"; // Ensure this path is correct for your project

const FullScreenLoader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            <img className="w-20 h-20" src={loader} alt="Loading..." />
        </div>
    );
};

export default FullScreenLoader;
