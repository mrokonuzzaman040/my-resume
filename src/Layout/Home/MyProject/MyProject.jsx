import React from "react";
import { Link } from "react-router-dom";

// images
import bdhomefindes from '../../../image/project/bdhomefinder.png'
import officetime from '../../../image/project/office-time.png'
import carhat from '../../../image/project/car-hat.png'

const MyProject = () => {
    return (
        <div className="w-full max-w-[85rem] mx-auto mt-10">
            <div className="mb-10">
                <h2 className="text-2xl font-black">Projects</h2>
                <h1 className="uppercase text-4xl text-gray-300">MY CREATION</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                    <div className="absolute inset-0 z-10 transition duration-300 bg-black bg-opacity-50 group-hover:bg-opacity-0"></div>
                    <img
                        className="object-cover w-full h-64 transition duration-300 transform group-hover:scale-110"
                        src={bdhomefindes}
                        alt=""
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-white">bdHomeFinders</h3>
                            <p className="text-sm text-white">Get your dream home here.</p>
                        </div>
                    </div> 
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                    <div className="absolute inset-0 z-10 transition duration-300 bg-black bg-opacity-50 group-hover:bg-opacity-0"></div>
                    <img
                        className="object-cover w-full h-64 transition duration-300 transform group-hover:scale-110"
                        src={officetime}
                        alt=""
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-white">Office Time</h3>
                            <p className="text-sm text-white">Corporate event management system.</p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                    <div className="absolute inset-0 z-10 transition duration-300 bg-black bg-opacity-50 group-hover:bg-opacity-0"></div>
                    <img
                        className="object-cover w-full h-64 transition duration-300 transform group-hover:scale-110"
                        src={carhat}
                        alt=""
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-white">Car Hat</h3>
                            <p className="text-sm text-white">Online car dealer point.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProject;
