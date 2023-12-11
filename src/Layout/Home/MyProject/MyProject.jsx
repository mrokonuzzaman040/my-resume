import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer } from 'react-icons/fa';

// images
import bdHomeFinder from '../../../image/project/bdhomefinder.png';
import officeTime from '../../../image/project/office-time.png';
import carHat from '../../../image/project/car-hat.png';

const MyProject = () => {
    return (
        <>
            <div className="w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto mt-10">
                <div className="mb-10">
                    <h2 className='text-2xl font-black'>Skills</h2>
                    <h1 className='uppercase text-4xl text-gray-300'>My Top Skills</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-full p-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                        <div className="relative">
                            <img className="w-full h-48 object-cover rounded-md" src={bdHomeFinder} alt="BD Home Finder" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md flex justify-center items-center gap-2 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                                <a href="https://bdhomefinders.web.app/" target="_blank" rel="noreferrer"><FaExternalLinkAlt className="text-white text-2xl" /></a>
                                <a href="https://github.com/mrokonuzzaman040/bd-home-finders" target="_blank" rel="noreferrer"><FaGithub className="text-white text-2xl" /></a>
                                <a href="https://github.com/mrokonuzzaman040/bd-home-finders-server" target="_blank" rel="noreferrer"><FaServer className="text-white text-2xl" /></a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <h2 className="text-xl font-bold">BD Home Finder</h2>
                            <p className="text-sm">A full-stack web application where you can find your dream home in Bangladesh. You can see the details of the home and also book your home.</p>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex gap-2">
                                <span className="text-sm">React</span>
                                <span className="text-sm">Node.js</span>
                                <span className="text-sm">Express.js</span>
                                <span className="text-sm">MongoDB</span>
                            </div>
                            <div className="flex gap-2">
                                <a href="https://bdhomefinders.web.app/" target="_blank" rel="noreferrer"><FaExternalLinkAlt className="text-xl" /></a>
                                <a href="https://github.com/mrokonuzzaman040/bd-home-finders" target="_blank" rel="noreferrer"><FaGithub className="text-xl" /></a>
                                <a href="https://github.com/mrokonuzzaman040/bd-home-finders-server" target="_blank" rel="noreferrer"><FaServer className=" text-xl" /></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-full p-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                        <div className="relative">
                            <img className="w-full h-48 object-cover rounded-md" src={officeTime} alt="Office Time" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md flex justify-center items-center gap-2 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                                <a href="https://food-donation-8087b.web.app/" target="_blank" rel="noreferrer"><FaExternalLinkAlt className="text-white text-2xl" /></a>
                                <a href="https://github.com/mrokonuzzaman040/food-donation-with-react-client" target="_blank" rel="noreferrer"><FaGithub className="text-white text-2xl" /></a>
                                <a href="https://github.com/mrokonuzzaman040/food-donation-with-react-server" target="_blank" rel="noreferrer"><FaServer className="text-white text-2xl" /></a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <h2 className="text-xl font-bold">Food Donation</h2>
                            <p className="text-sm">A full-stack web application where you can donate your extra food to the needy people. And users can request you to get the food.</p>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex gap-2">
                                <span className="text-sm">React</span>
                                <span className="text-sm">Node.js</span>
                                <span className="text-sm">Express.js</span>
                                <span className="text-sm">MongoDB</span>
                            </div>
                            <div className="flex gap-2">
                                <a href="https://food-donation-8087b.web.app/" target="_blank" rel="noreferrer"><FaExternalLinkAlt className="text-xl" /></a>
                                <a href="https://github.com/mrokonuzzaman040/food-donation-with-react-client" target="_blank" rel="noreferrer"><FaGithub className="text-xl" /></a>
                                <a href="https://github.com/mrokonuzzaman040/food-donation-with-react-server" target="_blank" rel="noreferrer"><FaServer className="text-xl" /></a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-full p-4 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                        <div className="relative">
                            <img className="w-full h-48 object-cover rounded-md" src={carHat} alt="Car Hat" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md flex justify-center items-center gap-2 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                                <a href="https://car-hat-58f88.web.app/" target="_blank" rel="noreferrer"><FaExternalLinkAlt className="text-white text-2xl" /></a>
                                <a href="https://github.com/mrokonuzzaman040/car-hat-client-site" target="_blank" rel="noreferrer"><FaGithub className="text-white text-2xl" /></a>
                                <a href="https://github.com/mrokonuzzaman040/car-hat-server-site" target="_blank" rel="noreferrer"><FaServer className="text-white text-2xl" /></a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <h2 className="text-xl font-bold">Car Hat</h2>
                            <p className="text-sm">A full-stack web application where you can see the details of the cars and their price. You can also add a new car and delete a car.</p>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex gap-2">
                                <span className="text-sm">React</span>
                                <span className="text-sm">Node.js</span>
                                <span className="text-sm">Express.js</span>
                                <span className="text-sm">MongoDB</span>
                            </div>
                            <div className="flex gap-2">
                                <a href="https://car-hat-58f88.web.app/" target="_blank" rel="noreferrer"><FaExternalLinkAlt className="text-xl" /></a>
                                <a href="https://github.com/mrokonuzzaman040/car-hat-client-site" target="_blank" rel="noreferrer"><FaGithub className="text-xl" /></a>
                                <a href="https://github.com/mrokonuzzaman040/car-hat-server-site" target="_blank" rel="noreferrer"><FaServer className="text-xl" /></a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default MyProject;