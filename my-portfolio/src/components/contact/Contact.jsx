import React from 'react'
import './contact.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <div id='contact'>
        <h2 className="aboutMe contactMe">Contact Me</h2>

        <div className='container contact-container'>
            <div className='contact-div'>
                <article className='social'>
                  <a href='https://www.facebook.com/wyut.hmone.35/' target='_blank' rel="noreferrer">
                    <FaFacebookSquare />
                  </a>
                  <h5>Facebook</h5>
                </article>
                <article className='social'>
                  <a href='https://github.com/KhaingWyutHmone' target='_blank' rel="noreferrer" className='github'>
                    <BsGithub />
                  </a>
                  <h5>Github</h5>
                </article>
                <article className='social'>
                  <a href='www.linkedin.com/in/khaing-wyut-hmone' target='_blank' rel="noreferrer">
                    <BsLinkedin />
                  </a>
                  <h5>Linkedin</h5>
                </article>
                <article className='social'>
                  <a href='mailto:kwh.qwerty@gmail.com' target="_blank" rel="noreferrer">
                    <AiOutlineMail />
                  </a>
                  <h5>Email</h5>
                </article>

                  
                  
                  
                  
                 
                    
                
            </div>
        </div>
    </div>
  )
}

export default Contact;