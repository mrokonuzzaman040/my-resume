import { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import profilepic from '../../../image/Person/profile.jpg';
import Experiance from './Experiance';


const Aboutme = () => {
    const aboutMeRef = useRef(null);

    useEffect(() => {
        const aboutMeElement = aboutMeRef.current;
        aboutMeElement.classList.add('fade-in');
    }, []);

    return (
        <div className='w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto' ref={aboutMeRef}>
            <div className="flex items-center justify-center p-10">
                <img className='lg:h-96 lg:w-96 sm:h-32 sm:w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={profilepic} alt="" />
            </div>
            <div className="flex justify-center gap-4 mb-4">
                <a href="https://www.linkedin.com/in/rokonuzzaman040/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-4xl text-indigo-500 hover:text-indigo-700" />
                </a>
                <a href="https://github.com/mrokonuzzaman040" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-4xl text-indigo-500 hover:text-indigo-700" />
                </a>
                <a href="mailto:mdrokonuzzamanmail@gmail.com">
                    <FaEnvelope className="text-4xl text-indigo-500 hover:text-indigo-700" />
                </a>
            </div>
            <div className="text-center flex flex-col gap-4 mb-7">
                <h1 className='text-4xl'>Hi, I'm <span>Md. Rokon Uzzaman</span></h1>
                <p>As a passionate and detail-oriented web developer, I possess expertise in ReactJS, NodeJS, ExpressJS, MongoDB, among others. My specialization lies in designing seamless and user-centric web applications that transform ideas into reality.</p>
            </div>

            <Experiance />
        </div>
    );
};

export default Aboutme;