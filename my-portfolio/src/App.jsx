import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import { Experience } from './components/experience/Experience'
import { Language } from './components/language/Language'
import { Learning } from './components/learning/Learning'
import Contact from './components/contact/Contact'

function App() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Language />
            <Learning />
            <Contact />
        </>
    )
}

export default App