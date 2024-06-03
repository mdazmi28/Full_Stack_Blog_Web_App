// import React from 'react';
import ReadPostPage from "./pages/ReadPostPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ByCategory from "./pages/ByCategory.jsx";
import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ReadPostPage />} />
                <Route path="/category/:categoryId" element={<ByCategory />} />
                <Route path="/details/:postId" element={<BlogDetailsPage />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;