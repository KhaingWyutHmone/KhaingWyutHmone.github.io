import React from 'react';
import './experience.css'
import {FaHtml5} from "react-icons/fa";
import {FaCss3} from "react-icons/fa";
import {SiJavascript} from "react-icons/si";
import {SiJquery} from "react-icons/si";
import {FaBootstrap} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {FaPhp} from "react-icons/fa";
import {FaLaravel} from "react-icons/fa";
import {FaJava} from "react-icons/fa";
import {SiSpringboot} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {VscAzure} from "react-icons/vsc";

export const Experience = () => {
  return (
    <section id='experience'>
      <h2 className="aboutMe">Experience</h2>

      <div className="container experience_container">
          <div className="frontend">
              <div className='frontend-section'>
                  <h3>Frontend Development</h3>
                  <div className='frontend-tech'>
                    <article className="tech">
                        <FaHtml5 className="tech-icon"/>
                        <h5>HTML</h5>
                        <h6>Experienced</h6>
                    </article>
                    <article className="tech">
                        <FaCss3 className="tech-icon"/>
                        <h5>CSS</h5>
                        <h6>Experienced</h6>
                    </article>
                    <article className="tech">
                        <SiJavascript className="tech-icon"/>
                        <h5>Javascript</h5>
                        <h6>Experienced</h6>
                    </article>
                    <article className="tech">
                        <FaBootstrap className="tech-icon"/>
                        <h5>Bootstrap</h5>
                        <h6>Experienced</h6>
                    </article>
                    <article className="tech">
                        <SiJquery className="tech-icon"/>
                        <h5>JQuery</h5>
                        <h6>Experienced</h6>
                    </article>
                    <article className="tech">
                        <FaReact className="tech-icon"/>
                        <h5>React</h5>
                        <h6>Intermediate</h6>
                    </article>
                  </div>
              </div>
          </div>

          <div className="backend">
              <div className='backend-section'>
                <h3>Backend Development</h3>
                <div className='backend-tech'>
                  <article className="tech">
                    <FaPhp className="tech-icon"/>
                    <h5>PHP</h5>
                    <h6>Experienced</h6>
                  </article>
                  <article className="tech">
                    <FaLaravel className="tech-icon"/>
                    <h5>Laravel</h5>
                    <h6>Experienced</h6>
                  </article>
                  <article className="tech">
                    <FaJava className="tech-icon"/>
                    <h5>Java</h5>
                    <h6>Intermediate</h6>
                  </article>
                  <article className="tech">
                    <SiSpringboot className="tech-icon"/>
                    <h5>SpringBoot</h5>
                    <h6>Basic</h6>
                  </article>
                  <article className="tech">
                    <GrMysql className="tech-icon"/>
                    <h5>Mysql</h5>
                    <h6>Experienced</h6>
                  </article>
                  <article className="tech">
                    <VscAzure className="tech-icon"/>
                    <h5>Azure</h5>
                    <h6>Basic</h6>
                  </article>

                </div>
              </div>
          </div>
      </div>
    </section>
  )
}
