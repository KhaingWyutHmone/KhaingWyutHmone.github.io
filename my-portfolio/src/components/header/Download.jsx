
import React from 'react'
import CV from '../../assets/CV.pdf'

const Download = () => {
  return (
    <div className='download'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Get to know</a>
    </div>
  )
}

export default Download