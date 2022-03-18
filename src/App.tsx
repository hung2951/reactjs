import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './page/homePage';
import ClientLayout from './layouts/ClientLayout';
import AdminLayout from './layouts/AdminLayout';

import ProductDetail from './page/ProductDetail';
import DashBoard from './admin/DashBoard';
import ProductAdd from './page/ProductAdd';
import ProductPage from './page/ProductPage';
import React, { useEffect } from 'react'
import { add, list } from './api/product';

function App() {
  const [products, setProduct] = useState<{ _id: number, name: string, price: number, desc: String }[]>([])
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await list();
      setProduct(data)
    }
    getProduct()
  }, []);

  const onHandleAdd = async (product: any) => {
    const { data } = await add(product);

    setProduct([...products, data])
  }
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<ClientLayout />}>
            <Route index element={<HomePage />} />
            <Route path='product'>
              <Route index element={<ProductPage products={products} />} />
              <Route path=':id' element={<ProductDetail />} />
            </Route>
          </Route>
          <Route path='admin' element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path='dashboard' element={<DashBoard />} />
            <Route path='product/add' element={<ProductAdd onAdd={onHandleAdd} />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
