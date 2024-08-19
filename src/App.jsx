import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '/components/Layout';
import Home from '/components/Home';
import AboutUs from '/components/AboutUs';
import ProductsServices from '/components/ProductsServices';
import ContactUs from '/components/ContactUs';
function App  () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout><Home /></Layout>,
    },
    {
      path: '/aboutus',
      element: <Layout><AboutUs /></Layout>,
    },
    {
      path: '/products',
      element: <Layout><ProductsServices /></Layout>,
    },
    {
      path: '/contactus',
      element:<Layout><ContactUs /></Layout> , 
    },
  ])
  return (
    <>
    <div>
      <RouterProvider router={router}/>
      </div>
    </>
  );
};

export default App;

