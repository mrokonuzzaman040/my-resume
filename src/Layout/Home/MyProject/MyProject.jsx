import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer } from 'react-icons/fa';

// images
import bdHomeFinder from '../../../image/project/bdhomefinder.png';
import officeTime from '../../../image/project/office-time.png';
import carHat from '../../../image/project/car-hat.png';

const MyProject = () => {
    return (
        <section className="my-project">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>My Project</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-project">
                            <div className="project-img">
                                <img src={bdHomeFinder} alt="bd-home-finder" />
                            </div>
                            <div className="project-content">
                                <h3>BD Home Finder</h3>
                                <p>BD Home Finder is a real estate website. Where you can find your dream home. You can search your home by location and price. You can also see the details of the home.</p>
                                <div className="project-link">
                                    <a href="
                                    https://bd-home-finder.web.app/" target="_blank" rel="noreferrer">
                                        <FaExternalLinkAlt />
                                    </a>
                                    <a href="" target="_blank" rel="noreferrer">
                                        <FaServer />
                                    </a>
                                    <a href="" target="_blank" rel="noreferrer">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-project">
                            <div className="project-img">
                                <img src={officeTime} alt="office-time" />
                            </div>
                            <div className="project-content">
                                <h3>Office Time</h3>
                                <p>Office Time is a website where you can track your office time. You can also see your total working hours and total earning.</p>
                                <div className="project-link">
                                    <a href="https://office-time-9c9a0.web.app/" target="_blank" rel="noreferrer">
                                        <FaExternalLinkAlt />
                                    </a>
                                    <a href="" target="_blank" rel="noreferrer">
                                        <FaServer />
                                    </a>
                                    <a href="" target="_blank" rel="noreferrer">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-project">
                            <div className="project-img">
                                <img src={carHat} alt="car-hat" />
                            </div>
                            <div className="project-content">
                                <h3>Car Hat</h3>
                                <p>Car Hat is a website where you can find your dream car. You can search your car by location and price. You can also see the details of the car.</p>
                                <div className="project-link">
                                    <a href="https://car-hat.web.app/" target="_blank" rel="noreferrer">
                                        <FaExternalLinkAlt />
                                    </a>
                                    <a href="" target="_blank" rel="noreferrer">
                                        <FaServer />
                                    </a>
                                    <a href="" target="_blank" rel="noreferrer">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    );
};

export default MyProject;