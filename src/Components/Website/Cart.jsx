import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { ProductsData } from './../../App';
import { Link } from 'react-router-dom';

export default function Cart() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const data = useContext(ProductsData);

  const [CartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const [user, setUser] = useState(sessionStorage.getItem('User') || false)

  const [product, setProduct] = useState({ products: [...data] });

  const [price, setPrice] = useState(0);

  const [cart, setCart] = useState(CartData);

  const handleData = (myData) => {
    const length = myData.length;
    for (let i = 0; i < length; i++) {
      myData[i] = parseInt(myData[i]);
    }
  };

  const dataDetails = data.filter(item => item.id === 4);

  useEffect(() => {

    const sumPrice = product.products.reduce((accumulator, current) => {
      if (current.price >= 0) {
        return accumulator + current.price * current.quantity;
      }

      localStorage.setItem("products", JSON.stringify(product))
      return accumulator;
    }, 0);

    localStorage.setItem("price", JSON.stringify(sumPrice))
    localStorage.setItem("products", JSON.stringify(product))
    setPrice(sumPrice);

  }, [product]);

  const increment = (id) => {
    setProduct((prevProducts) => ({
      products: prevProducts.products.map((product) =>
        product.id === id ? { ...product, quantity: parseInt(product.quantity) + 1 } : product
      ),
    }));

    localStorage.setItem("products", JSON.stringify(product))
    localStorage.setItem("price", JSON.stringify(price))
  };

  const decrement = (id) => {
    setProduct((prevProducts) => ({
      products: prevProducts.products.map((product) =>
        product.id === id ? { ...product, quantity: parseInt(product.quantity) - 1 } : product
      ),
    }));

    localStorage.setItem("products", JSON.stringify(product))
    localStorage.setItem("price", JSON.stringify(price))
  };

  const handleLocalStorage = (arr) => {
    setProduct((prevState) => ({
      products: prevState.products.filter((e) => arr.includes(e.id)),
    }));
  };

  const handleDelete = (id) => {

    setProduct((prevState) => ({
      products: prevState.products.filter((product) => product.id !== id),
    }));

    let count = -1
    for (let x in cart) {
      count += 1

      if (cart[x] == id) {
        console.log(cart[x])
        cart.splice(count, 1);
        localStorage.setItem("cart", JSON.stringify(cart))

      }
    }
  };

  return (
    <div class="h-screen bg-gray-100 pt-20 overflow-y-auto" onLoad={handleData(CartData)}>
      <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
        <div class="rounded-lg md:w-2/3 " onLoad={() => { handleLocalStorage(CartData) }}>
          {product.products?.map((product, index) => {
            return (
              <div key={index} class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start ">
                <img src={product.images[0]} alt="product-image" class="w-full rounded-lg sm:w-40" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">{product.title}</h2>
                    <p class="mt-1 text-xs text-gray-700">{product.description}</p>
                  </div>
                  <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                      <span onClick={() => { decrement(product.id) }} class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-teal-500 hover:text-blue-50">  <button>-</button> </span>
                      {product.quantity}
                      <span onClick={() => { increment(product.id) }} class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-teal-500 hover:text-blue-50">  <button>+</button> </span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <p class="text-sm">${product.price} </p>
                      <button onClick={() => { handleDelete(product.id); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div class="sticky top-0 mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">${price}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Shipping</p>
            <p class="text-gray-700">$0.00</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold"> ${price}</p>
              <p class="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          {user ?
            (<Link to="/payment"><button class="mt-6 w-full rounded-md bg-teal-600 py-1.5 font-medium text-blue-50 hover:bg-teal-800">Check out</button></Link>)
            : (<Link to={{ pathname: '/signIn', search: 'CheckOut' }}><button class="mt-6 w-full rounded-md bg-teal-600 py-1.5 font-medium text-blue-50 hover:bg-teal-800">Check out</button></Link>)
          }
        </div>
      </div>
    </div>


  )
}
