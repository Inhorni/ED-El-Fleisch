import React from 'react'
import placeholder from '../assets/monkeoogoog.png';

const footer = () => {
  return (
<footer class=" rounded-lg shadow m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={placeholder.src} class="h-16" alt="Ed-El Monke OOG OOG" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ED-EL Großschlachterei</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Contact</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Impressum</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a class="hover:underline">ED-EL Großschlachterei und Fleischhandel GmbH</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default footer