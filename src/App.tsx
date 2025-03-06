// Packages section
import { Routes, Route } from 'react-router-dom'
// Styles section
import './reset.css'
import './global.css';
// Components section
import Navbar from './components/Navbar';
// Pages section
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProductPage from './pages/AddProductPage';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <main className='man-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />
          <Route path='/add-product' element={<AddProductPage />} />
          {/* Catch-all route for unknown paths */}
          <Route path='*' element={<h2>404 Page not found!</h2>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
