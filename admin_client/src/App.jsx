
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome.jsx';
import CategoryReadPage from './pages/CategoryPages/CategoryReadPage.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/read/categories" element={<CategoryReadPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
