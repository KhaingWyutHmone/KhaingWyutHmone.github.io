
import React from 'react';
import './language.css'
import {FaLanguage} from "react-icons/fa"

export const Language = () => {
  return (
    <section id='language'>
      <h2 className="aboutMe">Language</h2>

      <div className="container language_container">
          <div className='burmese'>
            <article className="lang">
                <FaLanguage className="tech-icon"/>
                <h4>Burmese</h4>
                <h5 className='level'>Native</h5>
            </article>
          </div>

          <div className='english'>
            <article className="lang">
                <FaLanguage className="tech-icon"/>
                <h4>English</h4>
                <h5 className='level'>Upper Intermediate</h5>
            </article>
          </div>

          <div className='japanese'>
            <article className="lang">
                <FaLanguage className="tech-icon"/>
                <h4>Japanese</h4>
                <h5 className='level'>Business Conversation</h5>
            </article>
          </div>
      </div>
    </section>
  )
}
