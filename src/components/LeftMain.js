import React from 'react'
import '../styles/LeftMain.css'
// import xrp from '../assets/xrp-logo.png'
import title from '../assets/title.png'

const LeftMain = () => {

  return (
    <div className='section'>
        <div className="left-section">
        <div className="background-img"></div>
        <img className='title' src={title} alt="minted title"/>
        <p className='left-text'>A digital minting Dapp, letting you mint multiple NFT assets from your own digital files!</p>
        <p className='types'>Ebooks, Art, Music, Podcasts, Courses ... Any digital file!</p>
        <div className="buttons">
            <button className='create-btn'>Create NFTs</button>
            <button className='explore-btn'>Explore</button>
        </div>
        </div>
    </div>
  )
}

export default LeftMain