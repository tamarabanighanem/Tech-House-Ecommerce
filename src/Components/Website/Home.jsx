import React, { useContext, useEffect, useState } from 'react'
import { ProductsData } from './../../App';
import hero1 from './../../Images/hero1.jpeg'
import hero2 from './../../Images/hero2.jpg'
import hero3 from './../../Images/hero3.jpg'
import Product1 from './../../Images/Product-1.png'
import Product2 from './../../Images/Product-2.png'
import Product3 from './../../Images/Product-3.png'
import Product4 from './../../Images/Product-4.png'
import Product5 from './../../Images/Product-11.png'
import Clock from './Clock';
import { motion } from 'framer-motion'
import {
  Carousel,
  initTE,
} from "tw-elements";
import { Link } from 'react-router-dom';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = useContext(ProductsData);

  const dis = data.filter((product) => product.discountPercentage !== 0);

  initTE({ Carousel });

  return (
    <>
      <div className='grid grid-cols-12'>

        <div className='mt-24 ml-10 col-span-12 lg:col-span-4 md:col-span-4'>
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black"> For modern electronics at the best prices</h1>
          <Link to='/products' class="inline-flex items-center transition-bg justify-center px-5 py-3 text-base font-medium text-center text-white bg-teal-600 mt-10 rounded-lg hover:bg-teal-800 focus:ring-4 focus:ring-teal-300">
            Shop Now
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </Link>
        </div>

        <div className='col-span-1'></div>
        <div id="heroSlider" className="relative h-3/6	col-span-12 lg:col-span-7 md:col-span-7"
          data-te-carousel-init=""
          data-te-carousel-slide=""
        >
          {/*Carousel items*/}
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {/*First item*/}
            <div
              className="relative float-left -mr-[100%] w-full transition-transform   duration-[600ms] ease-in-out motion-reduce:transition-none backdrop-blur-sm"
              data-te-carousel-active=""
              data-te-carousel-item=""
              style={{ backfaceVisibility: "hidden" }}
            >

              <img
                src={hero1}
                className="block backdrop-blur-sm "
                alt="..."
                style={{ height: "508px" }}
              />

            </div>

            <div
              className="relative float-left -mr-[15%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item=""
              style={{ backfaceVisibility: "hidden" }}
            >
              <img
                src={hero2}
                className="block w-full"
                alt="..."
                style={{ height: "508px" }}
              />
            </div>

            {/*Third item*/}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item=""
              style={{ backfaceVisibility: "hidden" }}
            >
              <img
                src={hero3}
                className="block w-full"
                alt="..."
                style={{ height: "508px" }}
              />

            </div>
          </div>
          {/*Carousel indicators*/}
          <div
            className="relative mb-10 a z-[2] mx-[15%] flex list-none justify-center p-0"
            data-te-carousel-indicators=""
          >
            <div className='absolute bottom-5'>
              <button
                type="button"
                data-te-target="#heroSlider"
                data-te-slide-to={0}
                data-te-carousel-active=""
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-te-target="#heroSlider"
                data-te-slide-to={1}
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-te-target="#heroSlider"
                data-te-slide-to={2}
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"
              />
            </div>
          </div>
          {/*Carousel controls - prev item*/}
          <button
            className="absolute bottom-0 left-0 top-50 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-teal-500 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-teal-300 hover:no-underline hover:opacity-90 hover:outline-none focus:text-teal-500 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#heroSlider"
            data-te-slide="prev"
          >
            <span className="inline-block h-8 w-8 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          {/*Carousel controls - next item*/}
          <button
            className="absolute bottom-0 right-0 top-50 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-teal-500 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-teal-200 hover:no-underline hover:opacity-90 hover:outline-none focus:text-teal-500 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#heroSlider"
            data-te-slide="next"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </div>

      {/* Limited Offers */}
      <section className="bg-teal-100 py-12">
        <div className="mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-12  lg:flex-row">

            <div className="col-span-12 text-center lg:text-start lg:col-span-6 self-center">
              <div className="mb-8">
                <h1 className="text-black text-sm uppercase font-medium mb-2">Limited Offers</h1>
                <h3 className="text-black text-lg font-bold">Quality Armchair</h3>
              </div>
              <Clock />
            </div>

            <div id="OffersSlider" className="relative h-3/6 col-span-12 lg:col-span-6"
              data-te-carousel-init=""
              data-te-carousel-slide="">

              {/*Carousel items*/}
              <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

                <div
                  className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none backdrop-blur-sm"
                  data-te-carousel-active=""
                  data-te-carousel-item=""
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className='flex justify-center'>
                    <img
                      src={Product1}
                      className="block backdrop-blur-sm "
                      alt="..."
                      style={{ height: "300px", width: "auto" }}
                    />
                  </div>
                </div>

                <div
                  className="relative float-left -mr-[15%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item=""
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className='flex justify-center'>
                    <img
                      src={Product2}
                      className="block w-full"
                      alt="..."
                      style={{ height: "300px", width: "auto" }}
                    />
                  </div>
                </div>

                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item=""
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className='flex justify-center'>
                    <img
                      src={Product3}
                      className="block w-full"
                      alt="..."
                      style={{ height: "300px", width: "auto" }}
                    />
                  </div>
                </div>

                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item=""
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className='flex justify-center'>
                    <img
                      src={Product4}
                      className="block w-full"
                      alt="..."
                      style={{ height: "300px", width: "auto" }}
                    />
                  </div>
                </div>

                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item=""
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className='flex justify-center'>
                    <img
                      src={Product5}
                      className="block w-full"
                      alt="..."
                      style={{ height: "300px", width: "auto" }}
                    />
                  </div>
                </div>

              </div>
              {/*Carousel indicators*/}
              <div
                className="relative z-[2] mx-[15%] flex list-none justify-center p-0"
                data-te-carousel-indicators=""
              >
                <div className=''>
                  <button
                    type="button"
                    data-te-target="#OffersSlider"
                    data-te-slide-to={0}
                    data-te-carousel-active=""
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-te-target="#OffersSlider"
                    data-te-slide-to={1}
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-te-target="#OffersSlider"
                    data-te-slide-to={2}
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"
                  />
                  <button
                    type="button"
                    data-te-target="#OffersSlider"
                    data-te-slide-to={3}
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"
                  />
                  <button
                    type="button"
                    data-te-target="#OffersSlider"
                    data-te-slide-to={4}
                    className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-teal-500 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"
                  />
                </div>
              </div>

              {/*Carousel controls - prev item*/}
              <button
                className="absolute bottom-0 left-0 top-50 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-teal-500 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-teal-300 hover:no-underline hover:opacity-90 hover:outline-none focus:text-teal-500 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#OffersSlider"
                data-te-slide="prev"
              >
                <span className="inline-block h-8 w-8 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-10 w-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Previous
                </span>
              </button>

              {/*Carousel controls - next item*/}
              <button
                className="absolute bottom-0 right-0 top-50 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-teal-500 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-teal-200 hover:no-underline hover:opacity-90 hover:outline-none focus:text-teal-500 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#OffersSlider"
                data-te-slide="next"
              >
                <span className="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-10 w-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Next
                </span>
              </button>
            </div>

            <div className='flex justify-center col-span-12'>
              <Link to="/products" className="text-lg font-medium">
                <motion.button whileTap={{ scale: 1.2 }} className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg mt-8">
                  Visit Store
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 ">
          <header>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
              latest offers
            </h2>
          </header>

          <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {dis.map((pro) => (

              <li >
                <a href="#" class="block overflow-hidden group">
                  <Link to={`/productsdetails/${pro.id}`}>  <img
                    src={pro.images[0]}
                    alt=""
                    class="h-[250px] rounded-3xl	 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
                  /></Link>

                  <div class="relative pt-3 bg-white">
                    <h3
                      class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                      Brand : {pro.brand}
                    </h3>
                    <h3
                      class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                      Description : {pro.description}

                    </h3>

                    <p class="mt-2">
                      <span class="sr-only"> Regular Price </span>

                      <span class="tracking-wider text-lg text-rose-600	 line-through">$ {pro.price} GBP</span>
                      <br />
                      <span class="tracking-wider text-lg text-teal-600">$ {pro.price - (0.10 * pro.price)}</span>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

        </div>
        <div class="flex flex-col items-center justify-center px-12 py-3">
          <Link to="/products" className='bg-teal-600  transition-bg duration-300 hover:text-teal-600  hover:bg-teal-200 inline-block rounded border border-teal-600  px-12 py-3 text-sm font-medium text-white hover:bg-transparent  focus:outline-none focus:ring-4 focus:ring-teal-300'>Latest offers</Link>
        </div>
      </section>


      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 pb-11">
        <div>
          <h2 class="text-xl font-bold mb-10 text-gray-900 sm:text-3xl">
            Products Collection
          </h2>
        </div>

        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">


            <div class="w-1/2 p-1 md:p-2 ">
              <Link to={`/productsdetails/${data[10].id}`}>
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover border-2 object-center border-black"
                  src={data[10].images[0]} /></Link>
            </div>
            <div class="w-1/2 p-1 md:p-2 ">
              <Link to={`/productsdetails/${data[1].id}`}><img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover border-2 object-center border-black"
                src={data[1].images[0]} /></Link>
            </div>
            <div class="w-full p-1 md:p-2 ">
              <Link to={`/productsdetails/${data[12].id}`}>  <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover border-2 object-center border-black"
                src={data[12].images[0]} /></Link>
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2 ">
              <Link to={`/productsdetails/${data[4].id}`}><img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover border-2 object-center border-black"
                src={data[4].images[0]} /></Link>
            </div>
            <div class="w-1/2 p-1 md:p-2 ">
              <Link to={`/productsdetails/${data[8].id}`}><img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover border-2 object-center border-black"
                src={data[8].images[0]} /></Link>
            </div>
            <div class="w-1/2 p-1 md:p-2 ">
              <Link to={`/productsdetails/${data[6].id}`}><img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover border-2 object-center border-black "
                src={data[6].images[0]} /></Link>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center px-12 py-3">
          <Link to="/products" className='bg-teal-600  transition-bg duration-300 hover:text-teal-600  hover:bg-teal-200 inline-block rounded border border-teal-600  px-12 py-3 text-sm font-medium text-white hover:bg-transparent  focus:outline-none focus:ring-4 focus:ring-teal-300'>Show all product</Link>
        </div>
      </div>

    </>
  )
}
