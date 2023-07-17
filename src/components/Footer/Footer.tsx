import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import logo from '../../img/white.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-icons'>
        <span><FaUserCircle /></span>
        <span><BsGithub /></span>
        <span><BsLinkedin /></span>
      </div>
      <div className='Footer-logo'>
        <img src={logo} alt="Alic Barandica" />
      </div>
    </div>
  )
}

export default Footer