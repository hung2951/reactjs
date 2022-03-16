import { useState } from 'react'
import './App.css'
import type { Product } from './types/product';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './page/homePage';
import ClientLayout from './layouts/ClientLayout';
import AdminLayout from './layouts/AdminLayout';
import ProductPage from './page/ProductPage';
import ProductDetail from './page/ProductDetail';
import DashBoard from './admin/DashBoard';
function App() {

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<ClientLayout />}>
            <Route index element={<HomePage />} />
            <Route path='product'  >
              <Route index element={<ProductPage />} />
              <Route path=':id' element={<ProductDetail />} />
            </Route>
          </Route>
          <Route path='admin' element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path='dashboard' element={<DashBoard />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
