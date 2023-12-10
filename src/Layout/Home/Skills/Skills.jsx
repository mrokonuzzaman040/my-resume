import React from 'react';

// icons
import react from '../../../image/icons/react.png';
import mongodb from '../../../image/icons/mogo-db.png';
import expressjs from '../../../image/icons/expressjs.png';
import firebase from '../../../image/icons/firebase.png';
import jwt from '../../../image/icons/jwt.png';
import nodejs from '../../../image/icons/nodejs.png';
import python from '../../../image/icons/python.png';
import reactrouter from '../../../image/icons/react-router.png';

const Skills = () => {
    return (
        <div className='w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto'>
            <div className="mb-10">
                <h2 className='text-2xl font-black'>Skills</h2>
                <h1 className='uppercase text-4xl text-gray-300'>My Top Skills</h1>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 sm:grid-rows-1 lg:grid-rows-2 gap-8">
                <div className="flex items-center gap-3">
                    <div className="">
                        <img className='w-24 h-22' src={react} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>React</h2>
                        <p className='text-gray-500 text-sm'>Lorem,consectetur adipisicing elit. Totam, culpa?</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="">
                        <img className='w-24 h-22' src={mongodb} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>MongoDB</h2>
                        <p className='text-gray-500 text-sm'>Lorem,consectetur adipisicing elit. Totam, culpa?</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="">
                        <img className='w-24 h-22' src={nodejs} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>Nodejs</h2>
                        <p className='text-gray-500 text-sm'>Lorem,consectetur adipisicing elit. Totam, culpa?</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="">
                        <img className='w-24 h-22' src={firebase} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>Firebase</h2>
                        <p className='text-gray-500 text-sm'>Lorem,consectetur adipisicing elit. Totam, culpa?</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="">
                        <img className='w-24 h-22' src={reactrouter} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>React Router</h2>
                        <p className='text-gray-500 text-sm'>Lorem,consectetur adipisicing elit. Totam, culpa?</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="">
                        <img className='w-24 h-22' src={expressjs} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>ExpressJS</h2>
                        <p className='text-gray-500 text-sm'>Lorem,consectetur adipisicing elit. Totam, culpa?</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="">
                        <img className='w-24 h-22' src={jwt} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>JWR</h2>
                        <p className='text-gray-500 text-sm'>Lorem,consectetur adipisicing elit. Totam, culpa?</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="">
                        <img className='w-24 h-22' src={python} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>Python</h2>
                        <p className='text-gray-500 text-sm'>Lorem,consectetur adipisicing elit. Totam, culpa?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;