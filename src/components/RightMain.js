import React from 'react'
import Hero from '../assets/hero.png'
import '../styles/RightMain.css'

const RightMain = () => {
  return (
    <div>
        <img className='hero' src={Hero} alt="hero"/>
    </div>
  )
}

export default RightMain