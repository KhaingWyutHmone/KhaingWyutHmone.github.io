import React, { useState } from 'react'
import './nav.css'
import {AiTwotoneHome} from "react-icons/ai"
import {HiUserCircle} from "react-icons/hi"
import {GrPersonalComputer} from "react-icons/gr"
import {GrLanguage} from "react-icons/gr"
import {GiBookshelf} from "react-icons/gi"

const Nav = () => {
    const [activeNav, setActiveNav ] = useState("#");
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}>
                <AiTwotoneHome />
            </a>
            <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}>
                <HiUserCircle />
            </a>
            <a href='#experience' onClick={() => setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}>
                <GrPersonalComputer />
            </a>
            <a href='#language' onClick={() => setActiveNav("#language")} className={activeNav === '#language' ? 'active' : ''}>
                <GrLanguage />
            </a>
            <a href='#learning' onClick={() => setActiveNav("#learning")} className={activeNav === '#learning' ? 'active' : ''}>
                <GiBookshelf />
            </a>
        </nav>
    )
}

export default Nav;