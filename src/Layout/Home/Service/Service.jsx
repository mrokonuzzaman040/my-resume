import React from 'react';

// Icons
import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";


const Service = () => {
    return (
        <div className='w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto mt-10'>
            <div className="mb-10">
                <h2 className='text-2xl font-black'>Services</h2>
                <h1 className='uppercase text-4xl text-gray-300'>WHAT I OFFER</h1>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                <div className="flex glass rounded-2xl bg-slate-50 p-4 flex-col items-center text-center">
                    <FaCode className='text-7xl text-indigo-600' ></FaCode>
                    <h2>Web Development</h2>
                    <p className="">
                        Web development refers to building and maintaining websites or web applications. It involves front-end development (client-side), back-end development (server-side), and database management to create functional and visually appealing online experiences. Technologies include HTML, CSS, JavaScript, various frameworks, databases, and more.
                    </p>
                </div>
                <div className="flex glass rounded-2xl bg-slate-50 p-4 flex-col items-center text-center">
                    <MdOutlineDesignServices className='text-7xl text-indigo-600'></MdOutlineDesignServices>
                    <h2>Web Design</h2>
                    <p className="">
                        Web designing involves creating the visual aspects of websites or web applications. It encompasses layout design, color schemes, typography, graphics, and user interface elements to enhance user experience and convey information effectively. Tools like Adobe XD, Figma, Sketch, and Photoshop are commonly used in web design.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Service;