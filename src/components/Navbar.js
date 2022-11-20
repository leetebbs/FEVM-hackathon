import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/minted-logo.png'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar = () => {

  
  return (
    <div className='container'>
        <div className="logo">
            <img className='logo-image' src={logo} alt="minted Logo"/>
        </div>
        <a href="https://chainex.web3shala.com/chain/314" target="_blank"><button className='faucet'>Testnet Faucet</button></a>
        <div className="connectBtnContainer">
        <ConnectButton chainStatus="none"
  accountStatus={{
    smallScreen: 'avatar',
    largeScreen: 'full',
  }}
/>
            {/* <button className='connectBtn'>{}</button> */}
        </div>
    </div>
  )
}

export default Navbar