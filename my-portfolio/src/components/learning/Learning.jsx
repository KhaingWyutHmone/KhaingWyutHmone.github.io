import React from 'react'
import './learning.css'
import Learn from '../../assets/learning.svg'
import {SiUdemy} from 'react-icons/si'
import {SiCoursera} from 'react-icons/si'
import {GiTeacher} from 'react-icons/gi'

export const Learning = () => {
  return (
    <section id='learning'>
        <h2 className="aboutMe">Currently Learning</h2>

        <div className='container learning_container'>
            <div className='learn'>
              <img src={Learn} alt="Learn"/>
            </div>
            <div className='learn1'>
                <article className='course'>
                  <SiUdemy className="course-icon"/>
                  <h2 className='course-name'><a href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/' target="_blank">React - The Complete Guide</a></h2>
                </article>
                <article className='course'>
                  <SiCoursera className="course-icon"/>
                  <h2 className='course-name'><a href='https://www.coursera.org/learn/algorithms-part1' target="_blank">Data Structure and ALgorithms</a></h2>
                </article>
                <article className='course'>
                  <GiTeacher className="course-icon"/>
                  <h2 className='course-name'><a href='https://github.com/mrthetkhine/AdvancedSEBatch1' target="_blank">Advanced Software Engineering</a></h2>
                </article>
            </div>
        </div>
    </section>
  )
}
