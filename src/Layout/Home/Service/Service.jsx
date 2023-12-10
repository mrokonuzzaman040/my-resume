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
            <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col items-center text-center">
                    <FaCode className='text-7xl text-indigo-600' ></FaCode>
                    <h2>Web Development</h2>
                    <p className="">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on meaningful content.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <MdOutlineDesignServices className='text-7xl text-indigo-600'></MdOutlineDesignServices>
                    <h2>ui / ux DESIGNING</h2>
                    <p className="">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on meaningful content.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="" alt="" />
                    <h2>Web Development</h2>
                    <p className="">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on meaningful content.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Service;