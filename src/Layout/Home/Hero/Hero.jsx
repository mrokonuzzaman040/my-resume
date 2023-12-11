import React from 'react';
import Typical from 'react-typical'
import Lottie from 'react-lottie';
import loti from '../../../image/Animation - 1702238395000.json'

const Hero = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loti,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto">
            <div className="grid grid-cols-2 items-center">
                <div className="flex flex-col gap-2">
                    <h2 className='uppercase font-bold text-6xl'>Hi, I am Rokon Uzzaman</h2>
                    <hp className='uppercase'>I am a
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                ' Web Developer',
                                1000,
                                ' Programmer',
                                1000,
                                ' Designer',
                                1000,
                                ' Freelancer',
                                1000,
                            ]}
                        />
                    </hp>
                    <div className="">
                        <button className='btn text-white bg-gradient-to-r from-indigo-500 to-blue-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500'>Download CV</button>
                    </div>
                </div>
                <div className="w-full p-4">
                    <Lottie options={defaultOptions}
                        height={400}
                        width={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;