import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Icons
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { DiGitBranch } from "react-icons/di";


// Experiance Component
import { SiUpwork } from "react-icons/si";

// Education Component
import { MdCastForEducation } from "react-icons/md";
import Lottie from 'react-lottie';

// Loti Animation
import experianceAnimate from '../../../image/Experiance/Animation - 1702316942045.json'
import educationAnimate from '../../../image/Education/Animation - 1702319273709.json'


const Experiance = () => {
    const experiance = {
        loop: true,
        autoplay: true,
        animationData: experianceAnimate,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const education = {
        loop: true,
        autoplay: true,
        animationData: educationAnimate,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <div className="">
                <div className="">
                    <div className="">
                        <Lottie options={experiance}
                            height={400}
                            width={400}
                        />
                    </div>
                    <h1 className="text-4xl text-center">Experiance</h1>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2022 - 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<DiGitBranch />}
                    >
                        <h3 className="vertical-timeline-element-title">Global Marketing Expert</h3>
                        <h4 className="vertical-timeline-element-subtitle">digiSocial Ltd, Dhaka, Bangladesh</h4>
                        <p>
                            Global Marketing, Reasearch, Counsiling, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2020 - Present"
                        iconStyle={{ background: 'rgb(148, 229, 0)', color: '#fff' }}
                        icon={<SiUpwork />}
                    >
                        <h3 className="vertical-timeline-element-title">Digital Marketing (Freelancing)</h3>
                        <h4 className="vertical-timeline-element-subtitle">UpWork LLC</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

            <div className="divider">

            </div>

            <div className="">
                <div className="">
                    <h1 className="text-4xl text-center">Education</h1>
                    <div className="">
                        <Lottie options={education}
                            height={400}
                            width={400}
                        />
                    </div>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2014 - 2016"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdCastForEducation />}
                    >
                        <h3 className="vertical-timeline-element-title">Secondary School Certificate</h3>
                        <h4 className="vertical-timeline-element-subtitle">Hossenabad Technical School and College</h4>
                        <p>
                            GPA 4.19 out of 5.00
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016 - 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdCastForEducation />}
                    >
                        <h3 className="vertical-timeline-element-title">Higher School Certificate</h3>
                        <h4 className="vertical-timeline-element-subtitle">Hossenabad Technical School and College</h4>
                        <p>
                            GPA 4.33 out of 5.00
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="December 2023"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<MdCastForEducation />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science and Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bangladesh University of Business and Technology (BUBT)</h4>
                        <p>
                            CGPA 2.98 out of 4.00
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div >
    );
};

export default Experiance;