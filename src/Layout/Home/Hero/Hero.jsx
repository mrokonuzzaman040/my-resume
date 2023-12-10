import React from 'react';
import developer from '../../../image/developer-image.svg'

const Hero = () => {
    return (
        <div className="w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto">
            <div className="grid grid-cols-2 items-center">
                <div className="flex flex-col gap-2">
                    <h2 className='uppercase font-bold'>Hi, I am Rokon Uzzaman</h2>
                    <p>A Full-Stack Developer & Design Enthusiast</p>
                    <div className="">
                        <button className='btn'>Download CV</button>
                    </div>
                </div>
                <div className="w-full">
                    <img src={developer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;