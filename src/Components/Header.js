import React from 'react'

const Header = () => {
  return (
    <>
    <div className='header shadow' /> 
    <div className='header'>
        <p className='left'>
            Tommaso Pardi 
        </p>
        <nav className='right'>
            <a href="#home-padding">HOME</a>
            <a href="#projects-padding">PROJECTS</a>
            <a href="#work-padding">EXPERIENCE</a>
            <a href="#about-padding">ABOUT</a> 
        </nav>
    </div>
    </>
  )
}

export default Header