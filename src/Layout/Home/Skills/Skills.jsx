import React from 'react';

// icons
import react from '../../../image/icons/react.png';
import mongodb from '../../../image/icons/mogo-db.png';
import expressjs from '../../../image/icons/expressjs.png';
import firebase from '../../../image/icons/firebase.png';
import jwr from '../../../image/icons/jwt.png';
import nodejs from '../../../image/icons/nodejs.png';
import python from '../../../image/icons/python.png';
import reactrouter from '../../../image/icons/react-router.png';

const Skills = () => {
    return (
        <div className='w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto'>
            <div className="grid grid-cols-3 grid-rows-2 gap-8">
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
                        <h2 className='font-bold uppercase text-xl'>MongoDB</h2>
                        <p className='text-gray-500 text-sm'>Lorem,consectetur adipisicing elit. Totam, culpa?</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="">
                        <img className='w-24 h-22' src={firebase} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>MongoDB</h2>
                        <p className='text-gray-500 text-sm'>Lorem,consectetur adipisicing elit. Totam, culpa?</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="">
                        <img className='w-24 h-22' src={reactrouter} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>MongoDB</h2>
                        <p className='text-gray-500 text-sm'>Lorem,consectetur adipisicing elit. Totam, culpa?</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="">
                        <img className='w-24 h-22' src={expressjs} alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold uppercase text-xl'>MongoDB</h2>
                        <p className='text-gray-500 text-sm'>Lorem,consectetur adipisicing elit. Totam, culpa?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;