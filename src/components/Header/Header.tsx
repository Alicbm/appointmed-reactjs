import React from 'react'
import icon from '../../img/appointmed_logo.png'
import { TfiMenu } from 'react-icons/tfi'
import Modal from './Modal'
import './Header.css'

const Header = () => {
  const [modal, setModal] = React.useState <boolean>(false)

  return (
    <header className='Header'>
      <div className='Header-icon'>
        <img src={icon} alt='AppointMed' className='Header-icon__icon'/>
        <div className='Header-icon__buttons'>
          <button>Registrate</button>
          <button>Ingresa</button>
        </div>
      </div>
      <div className='Header-menu'>
        <p onClick={() => setModal(true)} >Menú <span><TfiMenu /></span></p>
      </div>
      <Modal modal={modal} setModal={setModal}/>
    </header>
  )
}

export default Header