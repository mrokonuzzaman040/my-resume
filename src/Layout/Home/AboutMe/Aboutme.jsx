import React from 'react';
import profilepic from '../../../image/Person/profile.jpg'
import Experiance from './Experiance';

const Aboutme = () => {
    return (
        <div>
            <div className="flex items-center justify-center p-20">
                <img className='h-96 w-96 rounded-full' src={profilepic} alt="" />
            </div>
            <div className="text-center flex flex-col gap-4">
                <h1 className='text-4xl'>Hi, I'm <span>Md. Rokon Uzzaman</span></h1>
                <p>As a passionate and detail-oriented web developer, I possess expertise in ReactJS, NodeJS, ExpressJS, MongoDB, among others. My specialization lies in designing seamless and user-centric web applications that transform ideas into reality.</p>
            </div>
            <Experiance />
        </div>
    );
};

export default Aboutme;