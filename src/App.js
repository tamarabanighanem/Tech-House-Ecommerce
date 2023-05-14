import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useFetch from './CustomHooks/UseFetch';
import Footer from './Components/Website/Footer'
import Header from './Components/Website/Header'
import Home from './Components/Website/Home'
import AboutUs from './Components/Website/AboutUs'
import ContactUs from './Components/Website/ContactUs'
import Cart from './Components/Website/Cart'
import Confirmation from './Components/Website/Confirmation'
import Products from './Components/Website/Products'
import SignIn from './Components/Users/SignIn'
import SignUp from './Components/Users/SignUp'
import Loader from './Components/Website/Loader';
import ProductDetails from './Components/Website/Product';
import Payment from './Components/Website/Payment';

export const ProductsData = createContext();

function App() {
  const url = 'https://mocki.io/v1/2407d9ca-fc96-4310-8f8e-e519fe5ff909';
  const { data } = useFetch(url);
  const [isLog, setIsLog] = useState(false)

  return (
    <BrowserRouter>
      <ProductsData.Provider value={data || []}>
        <Header isLog={isLog} updateIsLog={setIsLog}/>
        <Routes>
          <Route index element={data ? <Home /> : <Loader />} />
          <Route path="/signIn" element={<SignIn updateIsLog={setIsLog}/>} />
          <Route path="/signUp" element={<SignUp updateIsLog={setIsLog}/>} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/cart" element={data ? <Cart /> : <Loader />} />
          <Route path="/confirmation" element={data ? <Confirmation /> : <Loader />} />
          <Route path="/products" element={data ? <Products /> : <Loader />} />
          <Route path="/productsdetails/:id" element={data ? <ProductDetails /> : <Loader />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </ProductsData.Provider>
    </BrowserRouter> 
  );
}

export default App;


