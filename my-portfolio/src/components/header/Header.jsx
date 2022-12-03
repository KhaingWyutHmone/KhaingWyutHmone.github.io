import React from 'react'
import Download from './Download'
import './header.css'
import ME from '../../assets/me1.svg'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <div className='info'>
                <h4 className='small-text'>Hello I am </h4>
                <h1>Khaing Wyut Hmone</h1>
                <h3 className='text-light'>Web Developer</h3>
                <Download />
            </div>
            
            <div className='me'>
                <img src={ME} alt="programmer" />
            </div>
        </div>
    </header>
  )
}

export default Header