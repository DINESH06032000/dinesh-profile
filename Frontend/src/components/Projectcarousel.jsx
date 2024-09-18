import React from 'react'
import '../css/projectcarousel.css'

import facial from "../assets/facial.png"
import visual from "../assets/visual.png"
import game1 from "../assets/pd game.png"
import izeon from "../assets/izeonit.png"
import portfolio from "../assets/portfolio.png"
import { FaLink } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { GiStrikingArrows } from "react-icons/gi";
import '../App.css';

function Projectcarousel() {
    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <div className="number">01</div>
                                    <div className="projecttitle">Portfolio</div>
                                    <p>I designed a dynamic portfolio using React for the front-end and Node.js for the back-end, ensuring a seamless user experience.
                                        This project highlights my full-stack development skills and showcases my professional work and achievements.</p>
                                    <br />
                                    <div className='projectskill'>HTML, CSS, Bootstrap, Javascript, React JS, Node JS, Express JS, SQL</div>
                                    <hr />
                                    <div className='proicons'>
                                    <a className='iconset' href=""><AiFillGithub className='Icon' /></a>                                    
                                    <a className='iconset' href="https://github.com/DINESH06032000/Facial-image"><FaLink className='Icon' /></a>
                                    </div>
                                </div>
                                <div className="col-4 projectimgs">
                                    <img className='projectimage img-thumbnail' src={portfolio} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item " data-bs-interval="3000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <div className="number">02</div>
                                    <div className="projecttitle">PD Gaming Store</div>
                                    <p> I developed a responsive gaming store landing page using HTML, CSS, and Bootstrap, optimized for all devices. The design ensures a
                                        visually appealing user interface with smooth navigation and functionality.</p>
                                    <br />
                                    <div className='projectskill'>HTML, CSS, Bootstrap</div>
                                    <hr />
                                    <div className='proicons'>
                                    <a className='iconset' href="https://github.com/DINESH06032000/pd-gaming"><AiFillGithub className='Icon' /></a>                                    
                                    <a className='iconset' href="https://dinesh06032000.github.io/pd-gaming/"><FaLink className='Icon' /></a>
                                    </div>
                                </div>
                                <div className="col-4 projectimgs">
                                    <img className='projectimage img-thumbnail' src={game1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="3000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <div className="number">03</div>
                                    <div className="projecttitle">Gaming Store using JSP </div>
                                    <p> I developed a gaming store website with a responsive front-end using HTML, CSS, Bootstrap, and JavaScript, and a dynamic back-end powered by Java,
                                        JSP, Regex, and SQL for data management. The site ensures smooth functionality and secure data handling.</p>
                                    <br />
                                    <div className='projectskill'>HTML, CSS, Bootstrap, Javascript, JSP, Java, Regex, SQL</div>
                                    <hr />
                                    <div className='proicons'>
                                    <a className='iconset' href=""><AiFillGithub className='Icon' /></a>                                    
                                    <a className='iconset' href="https://github.com/DINESH06032000/Facial-image"><FaLink className='Icon' /></a>
                                    </div>
                                </div>
                                <div className="col-4 projectimgs">
                                    <img className='projectimage img-thumbnail' src={facial} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="3000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <div className="number">04</div>
                                    <div className="projecttitle">Designed static website for Izeon IT Training</div>
                                    <p> Developed and maintained a web site using HTML, CSS, Bootstrap, Java Script, resulting in 25% increase in user engagement and a 24% increase in revenue with in the first Two months. </p>
                                    <br />
                                    <div className='projectskill'>HTML, CSS, Bootstrap, Java Script, Formspree</div>
                                    <hr />
                                    <div className='proicons'>
                                        <a className='iconset' href="https://www.izeonittraining.com/"><FaLink className='Icon' /></a>
                                    </div>
                                </div>
                                <div className="col-4 projectimgs">
                                    <img className='projectimage img-thumbnail' src={izeon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="3000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <div className="number">05</div>
                                    <div className="projecttitle">CharConnect</div>
                                    <p> CharConnect is a real-time chat application built with Spring Boot and React, offering seamless communication and user authentication. It features real-time
                                        updates using WebSockets for an interactive and dynamic user experience.</p>
                                    <br />
                                    <div className='projectskill'>HTML, CSS, Bootstrap, JavaScript, React JS, Chart JS, Java, Springboot, SQl </div>
                                    <hr />
                                    <div className='proicons'>
                                    <a className='iconset' href=""><AiFillGithub className='Icon' /></a>                                    </div>
                                </div>
                                <div className="col-4 projectimgs">
                                    <img className='projectimage img-thumbnail' src={facial} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="3000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <div className="number">06</div>
                                    <div className="projecttitle">Preserving Data Security in Facial Image using De - identification</div>
                                    <p> Here averaging over images is used to reduce the granularity of our image data. The
                                        facial landmark detection implemented inside dlip produces coordinates that map coordinates to
                                        specific facial features. Modules are Numpy, OpenCV, and dlip.</p>
                                    <br />
                                    <div className='projectskill'>Python, Numpy, OpenCV, dlib</div>
                                    <hr />
                                    <div className='proicons'>
                                    <a className='iconset' href=""><AiFillGithub className='Icon' /></a>                                    </div>
                                </div>
                                <div className="col-4 projectimgs">
                                    <img className='projectimage img-thumbnail' src={facial} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <div className="number">07</div>
                                    <div className="projecttitle">Visual Art using Generative AI </div>
                                    <p>Here we can built Text-to Image in AI generative using Stable Diffusion module. It
                                        involves iteratively refining a random noise input to generate high-quality samples. Modules are
                                        Diffuser, Mediapy, Pytorch and Random.</p>
                                    <br />
                                    <div className='projectskill'>Python, Diffuser, Mediapy, Pytorch , Random</div>
                                    <hr />
                                    <div className='proicons'>
                                    <a className='iconset' href=""><AiFillGithub className='Icon' /></a>                                    </div>
                                </div>
                                <div className="col-4 projectimgs">
                                    <img className='projectimage img-thumbnail' src={visual} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active buttonslide " aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2 buttonslide"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3 buttonslide"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="3" aria-label="Slide 4 buttonslide"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="4" aria-label="Slide 5 buttonslide"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="5" aria-label="Slide 6 buttonslide"></button>
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="6" aria-label="Slide 7 buttonslide"></button>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="" aria-hidden="true"><GiStrikingArrows className='fonticon' /></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="" aria-hidden="true"><GiStrikingArrows className='fonticon1' /></span>
                <span className="visually-hidden">Next</span>
            </button>

        </>
    )
}

export default Projectcarousel