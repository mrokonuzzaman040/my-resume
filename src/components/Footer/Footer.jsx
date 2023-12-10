import React from 'react';
import logo from '../../assets/fabicon.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">

            <div class="text-center">
                <div>
                    <a class="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">Rokon Uzzman</a>
                </div>

                <div class="mt-3">
                    <p class="text-gray-500">Contact Via <a class="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="#">Email</a> with me.</p>
                    <p class="text-gray-500">© Rokon Uzzaman. 2023 All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;