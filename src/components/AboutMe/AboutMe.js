import { faBriefcase, faCode, faLanguage, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { faFileCode, faIdCard } from '@fortawesome/free-regular-svg-icons';
import Flip from 'react-reveal/Flip';


const AboutMe = () => {
    return (

        <div className="container mb-5">
            <div className="pb-5 pt-3">
                <h3>
                    <Flip top cascade>
                        <span className="pb-2 custom-black-color my-border-bottom">
                            <FontAwesomeIcon icon={faUser} /> About Me
                        </span>
                    </Flip>
                </h3>
            </div>

            <div className="container about-container">
                <Fade bottom >
                    <section>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faIdCard} /> About Me
                                </p>
                            </div>
                            <div className="col-md-8 ">
                                <p style={{ textAlign: 'justify' }}>
                                    I am a 4th year B.Sc student in Computer Science and Engineering from Leading University. I completed a web development course from Programming Hero team By Jhanar Mahbub Sir. However, I can assure you that I am a quick learner, adaptive as well as an energetic person. I love to learn new things and take challenges.
                                </p>
                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom>
                    <section>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faUserGraduate} /> Education

                                </p>
                            </div>

                            <div className="col-md-8">
                                <div>
                                    <p className="fw-bold my-0">Leading University</p>
                                    <p>BS'c in Computer Science And Engineering </p>
                                    <ul>
                                        <li>Running</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4 ">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faCode} /> Skills
                                </p>
                            </div>
                            <div className="col-md-8 ">
                                {/* 1st row */}
                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-javascript-plain colored display-4"></i>
                                        <p className="fw-bold">JavaScript</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-react-original colored display-4"></i>
                                        <p className="fw-bold">React</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-nodejs-plain colored display-4"></i>
                                        <p className="fw-bold">Node.js</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-express-original colored display-4"></i>
                                        <p className="fw-bold">Express.js</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-mongodb-plain colored display-4"></i>
                                        <p className="fw-bold">MongoDB</p>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-bootstrap-plain colored display-4"></i>
                                        <p className="fw-bold">Bootstrap 5</p>
                                    </div>

                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-html5-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">HTML5</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-css3-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">CSS3</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-sass-original colored display-4"></i>
                                        <p className="fw-bold">Sass</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-tailwindcss-plain colored display-4"></i>
                                        <p className="fw-bold">Tailwind CSS</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-materialui-plain colored display-4"></i>
                                        <p className="fw-bold">Material UI</p>
                                    </div>

                                    <div className="col flex-column trans-card pb-3">
                                        <i className="devicon-git-plain-wordmark colored display-4"></i>
                                        <p className="fw-bold">Git</p>
                                    </div>
                                    <div className="col flex-column trans-card pb-3">

                                    </div>
                                    <div className="col flex-column trans-card pb-3">

                                    </div>
                                    <div className="col flex-column trans-card pb-3">

                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faFileCode} /> Other Skills
                                </p>
                            </div>

                            <div className="col-md-4">
                                <ul>
                                    <li className="mt-2">UX/UI</li>
                                    <li className="mt-2">Debugging</li>
                                    <li className="mt-2">REST APIs</li>
                                    <li className="mt-2">ES6</li>
                                    <li className="mt-2">Google Analytics</li>
                                    <li className="mt-2">SEO</li>
                                    <li className="mt-2">Digital Marketing</li>

                                </ul>
                            </div>
                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom >
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faBriefcase} /> Professional Training
                                </p>
                            </div>

                            <div className="col-md">

                                <div className="d-flex justify-content-between">
                                    <p className=""><b>1. Complete Web Development Course</b>/ Programming Hero</p>
                                    <p className="">Jun 2021 - Dec 2021</p>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p className=""><b>2. Digital Marketing</b>/ Soft Analyzer</p>
                                    <p className="">Mar 2021 - Sep 2021</p>
                                </div>
                            </div>

                        </div>
                    </section>
                </Fade>

                <hr />

                <Fade bottom>
                    <section className="about-section" >
                        <div className="row">
                            <div className="col-md-4">
                                <p className="fw-bold">
                                    <FontAwesomeIcon icon={faLanguage} />  Language
                                </p>
                            </div>

                            <div className="col-md-4">
                                <ul>
                                    <li className="mt-2">English</li>
                                    <li className="mt-2">Bengali</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </Fade>

            </div>




        </div >
    );
};

export default AboutMe;