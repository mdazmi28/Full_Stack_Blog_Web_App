
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome.jsx';
import CategoryReadPage from './pages/CategoryPages/CategoryReadPage.jsx';
import CategoryAddPage from "./pages/CategoryPages/CategoryAddPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/read/categories" element={<CategoryReadPage />} />
                <Route path="/add/categories" element={<CategoryAddPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
