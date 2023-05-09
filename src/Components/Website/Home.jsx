import React, { useContext, useState } from 'react'
import { ProductsData } from './../../App';
import heroImg1 from './../../Images/hero1.jpg';
import heroImg2 from './../../Images/hero2.jpg';
import heroImg3 from './../../Images/hero3.jpg';


import {
  Carousel,
  initTE,
} from "tw-elements";

export default function Home() {
  const data = useContext(ProductsData);

  const dis = data.filter((product) => product.discountPercentage !== 0)

  initTE({ Carousel });

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="relative h-3/6		"
        data-te-carousel-init=""
        data-te-carousel-slide=""
      >
        {/*Carousel indicators*/}
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators=""
        >
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to={0}
            data-te-carousel-active=""
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to={1}
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to={2}
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          />
        </div>
        {/*Carousel items*/}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/*First item*/}
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active=""
            data-te-carousel-item=""
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={heroImg1}
              className="block w-full"
              alt="..."
              style={{ height: "500px" }}
            />
            <div className="absolute inset-x-[15%] bottom-10 hidden py-5 text-center text-white md:block backdrop-blur-sm rounded-md">
              <p className='font-bold text-2xl text-teal-500 '>Welcome to our e-commerce site! Discover a world of possibilities with our wide range of products and services. Shop now and experience the convenience of online shopping with us.</p>
            </div>
          </div>
          {/*Second item*/}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item=""
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={heroImg2}
              className="block w-full"
              alt="..."
              style={{ height: "500px" }}
              
            />
            <div className="absolute inset-x-[15%] bottom-10 hidden py-5 text-center text-white md:block backdrop-blur-sm rounded-md">
              <p className='font-bold text-2xl text-teal-500 '>Welcome to our e-commerce site! Discover a world of possibilities with our wide range of products and services. Shop now and experience the convenience of online shopping with us.</p>
            </div>
          </div>
          {/*Third item*/}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item=""
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={heroImg3}
              className="block w-full"
              alt="..."
              style={{ height: "500px" }}
            />
            <div className="absolute inset-x-[15%] bottom-10 hidden py-5 text-center text-white md:block backdrop-blur-sm rounded-md">
              <p className='font-bold text-2xl text-teal-500 '>Welcome to our e-commerce site! Discover a world of possibilities with our wide range of products and services. Shop now and experience the convenience of online shopping with us.</p>
            </div>
          </div>
        </div>
        {/*Carousel controls - prev item*/}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
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
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
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
                  <img
                    src={pro.images[0]}
                    alt=""
                    class="h-[350px] rounded-3xl	 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
                  />

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

                      <span class="tracking-wider text-lg text-rose-600	 line-through">£ {pro.price} GBP</span>
                      <br />
                      <span class="tracking-wider text-lg text-teal-600"> {pro.price - (0.10 * pro.price) }</span>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

        </div>
        <div class="flex flex-col items-center justify-center px-12 py-3">

          <a
            class="inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
            href="/products"
          >
            Latest offers</a>
        </div>
      </section>


      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 pb-11">
        <header>
          <h2 class="text-xl font-bold mb-10 text-gray-900 sm:text-3xl">
            Products Collection
          </h2>
        </header>

        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">


            <div class="w-1/2 p-1 md:p-2 ">
              <a href='#'>  <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover border-4 object-center"
                src={data[10].images[0]} /></a>
            </div>
            <div class="w-1/2 p-1 md:p-2 ">
              <a href='#'><img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover border-4 object-center"
                src={data[1].images[0]} /></a>
            </div>
            <div class="w-full p-1 md:p-2 ">
              <a href='#'>  <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover border-4 object-center"
                src={data[12].images[0]} /></a>
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2 ">
              <a href='#'><img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover border-4 object-center"
                src={data[4].images[0]} /></a>
            </div>
            <div class="w-1/2 p-1 md:p-2 ">
              <a href='#'><img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover border-4 object-center"
                src={data[8].images[0]} /></a>
            </div>
            <div class="w-1/2 p-1 md:p-2 ">
              <a href='#'>  <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover border-4 object-center "
                src={data[6].images[0]} /></a>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center px-12 py-3">

          <a
            class="inline-block rounded border mt-10 border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
            href="/products"
          >
            Show all product
          </a>
        </div>
      </div>

    </>
  )
}
