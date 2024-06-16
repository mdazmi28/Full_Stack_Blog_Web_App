
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome.jsx';
import CategoryReadPage from './pages/CategoryPages/CategoryReadPage.jsx';
import CategoryAddPage from "./pages/CategoryPages/CategoryAddPage.jsx";
import CategoryUpdatePage from "./pages/CategoryPages/CategoryUpdatePage.jsx";
import BlogReadPage from "./pages/BlogPages/BlogReadPage.jsx";
import BlogAddPage from "./pages/BlogPages/BlogAddPage.jsx";
import BlogUpdatePage from "./pages/BlogPages/BlogUpdatePage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/read/categories" element={<CategoryReadPage />} />
                <Route path="/add/categories" element={<CategoryAddPage />} />
                <Route path="/update/categories/:id" element={<CategoryUpdatePage />} />
                <Route path="/read/blogs" element={<BlogReadPage />} />
                <Route path="/add/blogs" element={<BlogAddPage />} />
                <Route path="/update/blogs/:id" element={<BlogUpdatePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
