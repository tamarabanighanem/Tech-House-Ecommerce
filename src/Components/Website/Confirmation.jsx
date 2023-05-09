import React from 'react'
import { Link } from 'react-router-dom'

export default function Confirmation() {
  return (
    <div class="flex items-center justify-center h-screen">
      <div class="p-1 rounded shadow-lg bg-gradient-to-r from-teal-600 via-teal-600 to-teal-600">
        <div class="flex flex-col items-center p-4 space-y-2 bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 class="text-4xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-600">Thank You !</h1>
          <p>Thank you for buy from Tech-House ! Check your email for details about product details.</p>
          <div className='cursor-pointer'>      
          <a
            class="inline-flex items-center px-4 py-2 text-white bg-teal-600 border border-teal-600 rounded-full hover:bg-teal-400 focus:outline-none focus:ring">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span class="text-sm font-medium">
              <Link to="/">Home</Link>

            </span>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

