import React, { useContext, useEffect, useState } from "react";
import { ProductsData } from "../../App";
import "../../CSS/Products.css";
import { Link } from "react-router-dom";

export default function Product() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let cartulary = [];
  if (localStorage.cart != null) {
    cartulary = JSON.parse(localStorage.getItem("cart"));
  }

  const handleCartClick = (event) => {
    let newCart = true;
    for (let x in cartulary) {
      if (cartulary[x] == event.currentTarget.name) {
        newCart = false;
        break;
      }
    }
    if (newCart) {
      cartulary.push(event.currentTarget.name);
      localStorage.setItem("cart", JSON.stringify(cartulary));
    }
  };
  const pagenationHandle = (event) => {
    event.currentTarget.className =
      "cursor-pointer block h-8 w-8 rounded  bg-teal-600  text-center leading-8 text-gray-900";
    let productPagnationArray = [];
    for (
      let i = event.currentTarget.name - 8;
      i < event.currentTarget.name;
      i++
    ) {
      if (data[i] == null) {
        break;
      }
      productPagnationArray.push(data[i]);
    }
    setEdatafilter(productPagnationArray);
  };

  function handleChange(event) {
    setsearchtext(event.target.value);
    setEdatafilter(
      data.filter(
        (product) =>
          product.brand.toLowerCase().includes(searchtext) &&
          parseInt(product.price) <= parseInt(searchPrice) &&
          (product.category === productType || productType == "")
      )
    );
  }

  const searchType = (event) => {
    setsearchPrice(event.target.value);
    setEdatafilter(
      data.filter(
        (product) =>
          (product.brand.toLowerCase().includes(searchtext) ||
            searchtext == "") &&
          product.price <= event.target.value &&
          (product.category === productType || productType == "")
      )
    );
  };

  const data = useContext(ProductsData);
  const [productType, setproductType] = useState("");
  const [eDatafilter, setEdatafilter] = useState(data);
  const [toggleState, setToggleState] = useState(1);
  const [searchPrice, setsearchPrice] = useState(1000000000);
  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    let productPagnationArray = [];
    for (let i = 0; i < 8; i++) {
      if (data[i] == null) {
        break;
      }
      productPagnationArray.push(data[i]);
    }
    setEdatafilter(productPagnationArray);

    if (localStorage.cart === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  const toggleTab = (index) => {
    if (index == 4) {
      setproductType("smartphones");
      setEdatafilter(
        data.filter((product) => product.category === "smartphones")
      );
    } else if (index == 2) {
      setproductType("tv");
      setEdatafilter(data.filter((product) => product.category === "tv"));
    } else if (index == 3) {
      setproductType("smartwatch");
      setEdatafilter(
        data.filter((product) => product.category === "smartwatch")
      );
    } else if (index == 1) {
      setproductType("");
      setEdatafilter(data);
    }
    setToggleState(index);
  };
  const product = eDatafilter.map((item) => {
    return (
      <>
        <div className="bg-white  shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 mt-10 scale-90">
          <a href="#">
            <img
              className="rounded-t-lg p-8 h-80 w-80"
              src={item.images[0]}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                {item.title}
              </h3>
            </a>
            <div className="flex items-center justify-between">
              <div className="flex items-center mt-2.5 mb-5">
                <svg
                  className={`w-5 h-5 text-${item.rating >= 1 ? 'yellow' : 'gray' }-300`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className={`w-5 h-5 text-${item.rating >= 2 ? 'yellow' : 'gray' }-300`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className={`w-5 h-5 text-${item.rating >= 3 ? 'yellow' : 'gray' }-300`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className={`w-5 h-5 text-${item.rating >= 4 ? 'yellow' : 'gray' }-300`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className={`w-5 h-5 text-${item.rating >= 5 ? 'yellow' : 'gray' }-300`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="bg-blue-100 text-teal-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {item.rating}
                </span>
              </div>

              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${item.price}
              </span>
            </div>
            <hr className="px-3 mb-2"></hr>
            <div className="flex cursor-pointer items-center justify-around">
              <a
                name={item.id}
                onClick={handleCartClick}
                className="text-white bg-teal-600 transition-bg duration-300 hover:text-teal-600  hover:bg-teal-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </a>

              <Link to={`/productsdetails/${item.id}`}><div className="text-white bg-teal-600 transition-bg duration-300 hover:text-teal-600 hover:bg-teal-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Buy Now
              </div></Link>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col  py-6 w-3/4 m-h-screen ">
          <div
            className="bg-white items-center  justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky"
            style={{ top: 5 }}
          >
            <select
              id="countries"
              onChange={searchType}
              className="font-bold  rounded-s-full w-1/4 py-4 pl-4 ml-10 mr-2 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
            >
              <option selected className="w-24 h-10" value="1000000000">
                Price
              </option>
              <option value="50">Less 50$</option>
              <option value="100">Less 100$</option>
              <option value="500">Less 500$</option>
              <option value="5000">Less 5000$</option>
              <option value="50000">Less 50000$</option>
            </select>
            <input
              className="font-bold  rounded-e-full w-3/4 py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />

            <div className="bg-gray-600 p-2 hover:bg-teal-500 cursor-pointer mx-2 rounded-full">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="bloc-tabs font-bold">
        <button
          className={
            toggleState === 1
              ? "tabs transition-bg duration-300 active-tabs"
              : "tabs bg-teal-600 transition-bg duration-300 hover:bg-teal-600"
          }
          onClick={() => toggleTab(1)}
        >
          All Product
        </button>
        <button
          className={
            toggleState === 4
              ? "tabs transition-bg duration-300 active-tabs"
              : "tabs bg-teal-600 transition-bg duration-300 hover:bg-teal-600"
          }
          onClick={() => toggleTab(4)}
        >
          SMART PHONE
        </button>
        <button
          className={
            toggleState === 2
              ? "tabs transition-bg duration-300 active-tabs"
              : "tabs bg-teal-600 transition-bg duration-300 hover:bg-teal-600"
          }
          onClick={() => toggleTab(2)}
        >
          SMART TV
        </button>
        <button
          className={
            toggleState === 3
              ? "tabs transition-bg duration-300 active-tabs"
              : "tabs bg-teal-600 transition-bg duration-300 hover:bg-teal-600"
          }
          onClick={() => toggleTab(3)}
        >
          SMART WATCH
        </button>
      </div>

      <div className="productContainer flex flex-wrap flex-row justify-center  mx-0 sm:mx-6 lg:mx-10">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="productContainer flex flex-wrap flex-row justify-center  mx-0 sm:mx-6 lg:mx-10">
            {product}
          </div>

          <ol className="flex justify-center gap-1 text-xs font-medium">
            <li>
              <a className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer block h-8 w-8 rounded border-teal-600 bg-teal-600 text-center leading-8 text-gray-900"
                name={8}
                onClick={pagenationHandle}
              >
                1
              </a>
            </li>

            <li>
              <a
                className="cursor-pointer block h-8 w-8 rounded border-teal-600 bg-white-600 text-center leading-8 text-gray-900"
                name={16}
                onClick={pagenationHandle}
              >
                2
              </a>
            </li>

            <li>
              <a
                className="cursor-pointer block h-8 w-8 rounded border-teal-600 bg-white-600 text-center leading-8 text-gray-900"
                name={24}
                onClick={pagenationHandle}
              >
                3
              </a>
            </li>

            <li>
              <a
                className="cursor-pointer block h-8 w-8 rounded border-teal-600  bg-white-600  text-center leading-8 text-gray-900"
                name={32}
                onClick={pagenationHandle}
              >
                4
              </a>
            </li>

            <li>
              <a className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="productContainer flex flex-wrap flex-row justify-center  mx-0 sm:mx-6 lg:mx-10">
            {product}
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="productContainer flex flex-wrap flex-row justify-center  mx-0 sm:mx-6 lg:mx-10">
            {product}
          </div>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <div className="productContainer flex flex-wrap flex-row justify-center  mx-0 sm:mx-6 lg:mx-10">
            {product}
          </div>
        </div>
      </div>
    </div>
  );
}
