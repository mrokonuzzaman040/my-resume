import React from 'react';
import logo from '../../assets/fabicon.svg'
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiLogoUpwork } from "react-icons/bi";

const Footer = () => {
    return (
        <>
            <div className="bg-gray-900 text-white mt-20">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 items-center gap-2">
                        <div className="w-full sm:max-w-sm px-4">
                            <div className="mb-4">
                                <img src={logo} alt="" className="w-24" />
                            </div>
                            <div className="mb-4">
                                <p className="text-sm">Md. Rokon Uzzaman ( Full Stack Developer )</p>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <a href="https://github.com/mrokonuzzaman040" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-2xl text-gray-400 hover:text-gray-300" />
                                </a>
                                <a href="https://www.linkedin.com/in/rokonuzzaman040/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-2xl text-indigo-400 hover:text-gray-300" />
                                </a>
                                <a href="https://twitter.com/rokonuzzaman040" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-2xl text-sky-400 hover:text-gray-300" />
                                </a>
                                <a href="https://www.upwork.com/freelancers/~0109501d92846b8673" target="_blank" rel="noopener noreferrer">
                                    <BiLogoUpwork className="text-2xl text-green-400 hover:text-gray-300" />
                                </a>
                            </div>
                        </div>

                        <div className="grid lg:col-span-2 lg:grid-cols-3 gap-4">
                            <div className="w-full">
                                <h4 className="text-xl mb-4">Links</h4>
                                <div className="flex flex-col gap-2">
                                    <Link to="/" className="hover:text-gray-300">Home</Link>
                                    <Link to="/about" className="hover:text-gray-300">About</Link>
                                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                                </div>
                            </div>
                            <div className="w-full">
                                <h4 className="text-xl mb-4">Services</h4>
                                <div className="flex flex-col gap-2">
                                    <Link to="/" className="hover:text-gray-300">Web Development</Link>
                                    <Link to="/" className="hover:text-gray-300">Web Design</Link>
                                    <Link to="/" className="hover:text-gray-300">Mobile App Development</Link>
                                </div>
                            </div>
                            <div className="w-full">
                                <h4 className="text-xl mb-4">Contact</h4>
                                <div className="flex flex-wrap flex-col gap-2">
                                    <a href="mailto:mdrokonuzzamanmail@gmail.com" className="hover:text-gray-300">
                                        <span className="text-sm">Email: mdrokonuzzamanmail@gmail.com </span>
                                        <span className="text-sm">
                                        </span>
                                    </a>
                                    <a href="tel:+8801610830286" className="hover:text-gray-300">
                                        <span className="text-sm">Phone:(+880) 1610-830286 </span>
                                        <span className="text-sm">
                                        </span>
                                    </a>
                                    <a href="https://goo.gl/maps/9sVfQxR7W5s" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                        <span className="text-sm">Address: Mirpur-6, Dhaka, Bangladesh </span>
                                        <span className="text-sm">
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-gray-800 text-white py-4">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-gray-400">All rights reserved. © 2023</div>
                        <div className="text-sm text-gray-400">Md. Rokon Uzzaman</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;