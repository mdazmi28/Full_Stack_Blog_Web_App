// import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import CategoriesUpdatePage from "./pages/categoriesPages/CategoriesUpdatePage.jsx";
import CategoriesAddPage from "./pages/categoriesPages/CategoriesAddPage.jsx";
import CategoriesReadPage from "./pages/categoriesPages/CategoriesReadPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="/read/categories" element={<CategoriesReadPage/>} />
                <Route path="/create/categories" element={<CategoriesAddPage />} />
                <Route path="/update/categories" element={<CategoriesUpdatePage />} />
            </Routes>

        </BrowserRouter>
    );
};

export default App;