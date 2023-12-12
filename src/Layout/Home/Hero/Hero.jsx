import Typical from 'react-typical'
import Lottie from 'react-lottie';
import loti from '../../../image/Animation - 1702238395000.json'

import resume from '../../../assets/resume/Rokon_Uzzaman_web-developer_Resume.pdf'

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
            <div className="lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col-reverse items-center">
                <div className="flex flex-col gap-2">
                    <h2 className='uppercase font-bold text-6xl'>Hi, I am Rokon Uzzaman</h2>
                    <hp className='uppercase text-xl'>I am a
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                ' Web Developer 💻',
                                5000,
                                ' Programmer 🧑🏻‍💻',
                                5000,
                                ' Designer ✒️',
                                5000,
                                ' Freelancer 💸',
                                5000,
                            ]}
                        />
                    </hp>
                    <div className="">
                        <a href={resume} download className='btn text-white bg-gradient-to-r from-indigo-500 to-blue-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500'>Download CV</a>
                    </div>
                </div>
                <div className="w-full p-4">
                    <Lottie options={defaultOptions}
                        height={400}
                        width={400}
                    />
                </div>
            </div>
        </div >
    );
};

export default Hero;