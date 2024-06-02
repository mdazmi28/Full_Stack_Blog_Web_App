// import React from 'react';
import ReadPostPage from "./pages/ReadPostPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ReadPostPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;