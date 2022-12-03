import React from "react";
import './about.css';
import ME from '../../assets/myphoto.jpg'
import {FaAward} from "react-icons/fa";

const About = () => {
    return (
        <section id="about">
            <h2 className="aboutMe">About Me</h2>

            <div className="container about_container">
                <div className="my-photo">
                    <img src={ME} alt="myphoto" className="my-image"/>
                </div>

                <div className="myself">
                    <div className="cards">
                        <article className="exp-card">
                            <FaAward className="exp-icon"/>
                            <h5>Experience</h5>
                            <h6>2+ Years Working</h6>
                        </article>

                        <article className="exp-card">
                            <FaAward className="exp-icon"/>
                            <h5>Projects</h5>
                            <h6>10+ Working Projects</h6>
                        </article>
                    </div>

                    <div className="experience-brief">
                        <p>I am an experienced web-developer who loves to learn technology. I've worked in the tech industry for years with a variety of latest technologies. I am currently Working
                        in Japan and I can speak both Japanese and English fluently. In my free time, I also work as a freelance Japanese teacher and always learn the new technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;