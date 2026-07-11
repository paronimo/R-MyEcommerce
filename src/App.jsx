import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/barralateral.jsx';
import Home from './pages/home/index.jsx';
import ProductsList from './Products/productsList/productsList.jsx';
import ProductView from './Products/productsView.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />

        <main className="main-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductView />} />
            <Route path="/products/new" element={<ProductView isNew={true} />} />
            <Route path="/categories" element={<h2>Listado de categorías</h2>} />
            <Route path="/profile" element={<h2>Perfil del usuario</h2>} />
            <Route path="/404" element={<h2>Error 404 - Página No Encontrada</h2>} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/products" element={<ProductsList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;