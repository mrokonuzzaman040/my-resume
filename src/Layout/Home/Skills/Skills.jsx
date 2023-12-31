import React from 'react';
import { Link } from 'react-router-dom';

// icons
import react from '../../../image/icons/react.png';
import mongodb from '../../../image/icons/mogo-db.png';
import expressjs from '../../../image/icons/expressjs.png';
import firebase from '../../../image/icons/firebase.png';
import jwt from '../../../image/icons/jwt.png';
import nodejs from '../../../image/icons/nodejs.png';
import python from '../../../image/icons/python.png';
import reactrouter from '../../../image/icons/react-router.png';
import { FaArrowRight } from "react-icons/fa";


const Skills = () => {
    return (
        <div id='skill' className='w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto'>
            <div className="mb-10">
                <h2 className='text-2xl font-black'>Skills</h2>
                <h1 className='uppercase text-4xl text-gray-300'>My Top Skills</h1>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 sm:grid-rows-1 lg:grid-rows-2 gap-8">
                <Link className="flex items-center gap-3 bg-slate-50 rounded-xl glass p-2">
                    <div className="">
                        <img className='w-16 h-22' src={react} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>React</h2>
                        <p className='text-gray-500 text-sm'>ReactJavaScript library for UIs. Developed by Facebook.</p>
                    </div>
                    {/* <div className="">
                        <FaArrowRight className='text-2xl text-gray-500 hover:text-indigo-500'></FaArrowRight>
                    </div> */}
                </Link>
                <Link className="flex items-center gap-3 bg-slate-50 rounded-xl glass p-2">
                    <div className="">
                        <img className='w-16 h-22' src={mongodb} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>MongoDB</h2>
                        <p className='text-gray-500 text-sm'>MongoDB is a NoSQL database system, using a document-oriented model.</p>
                    </div>
                </Link>
                <Link className="flex items-center gap-3 bg-slate-50 rounded-xl glass p-2">
                    <div className="">
                        <img className='w-16 h-22' src={nodejs} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>Nodejs</h2>
                        <p className='text-gray-500 text-sm'>Node.js is a runtime environment that executes JavaScript code outside a web browser.</p>
                    </div>
                </Link>
                <Link className="flex items-center gap-3 bg-slate-50 rounded-xl glass p-2">
                    <div className="">
                        <img className='w-16 h-22' src={firebase} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>Firebase</h2>
                        <p className='text-gray-500 text-sm'>Firebase is a mobile and web application development platform by Google.</p>
                    </div>
                </Link>
                <Link className="flex items-center gap-3 bg-slate-50 rounded-xl glass p-2">
                    <div className="">
                        <img className='w-16 h-22' src={reactrouter} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>React Router</h2>
                        <p className='text-gray-500 text-sm'>React Router is a library for managing navigation and routing in React applications.</p>
                    </div>
                </Link>
                <Link className="flex items-center gap-3 bg-slate-50 rounded-xl glass p-2">
                    <div className="">
                        <img className='w-16 h-22' src={expressjs} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>ExpressJS</h2>
                        <p className='text-gray-500 text-sm'>Express.js is a minimal and flexible Node.js web application framework.</p>
                    </div>
                </Link>
                <Link className="flex items-center gap-3 bg-slate-50 rounded-xl glass p-2">
                    <div className="">
                        <img className='w-16 h-22' src={jwt} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>JWT</h2>
                        <p className='text-gray-500 text-sm'>JWT stands for JSON Web Token, a compact, URL-safe means of representing claims between two parties. </p>
                    </div>
                </Link>
                <Link className="flex items-center gap-3 bg-slate-50 rounded-xl glass p-2">
                    <div className="">
                        <img className='w-16 h-22' src={python} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>Python</h2>
                        <p className='text-gray-500 text-sm'>Python is a high-level, versatile programming language known for readability and simplicity.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Skills;