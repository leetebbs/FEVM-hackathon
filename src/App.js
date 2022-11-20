import './styles/App.css';
import Navbar from './components/Navbar';
import Left from './components/LeftMain'
import Right from './components/RightMain'
import { ethers } from "ethers";
import { useState } from'react'
import { useAccount } from 'wagmi'
import { Routes, Route, Link } from "react-router-dom";
import CreateNFT from './pages/CreateNFT';



function App() {
  const { address } = useAccount()

  console.log(address)


  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="main">
        <Left />
        <Right />
        </div>
        <div className="line"></div>
      </header>
      <CreateNFT address={address} />
    </div>
  );
}

export default App;
