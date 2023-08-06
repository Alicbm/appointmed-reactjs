import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './Modal.css'

interface SetModal{
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ modal, setModal }:SetModal) => {
  return (
    <div className={ modal? 'Modal modal-show': 'Modal modal-unshow'}>
      <div className='Modal-content'>
        <span 
          className='Modal-content__close'
          onClick={() => setModal(false)} 
        ><RiCloseFill /></span>
        <div className='Modal-content__sesion'>
          <h2>Iniciar Sesión</h2>
          <p><Link to='/login'>Ingresa</Link></p>
          <p><Link to='/signup'>Regístrate</Link></p>
        </div>
        <div className='Modal-content__menu'>
          <h2>Menú</h2>
          <p className='menu-selected'><Link to='/'>Inicio</Link></p>
          <p><Link to='/profile'>Mi Perfil</Link></p>
          <p><Link to='/doctors'>Doctores</Link></p>
          <p><Link to='/'>Horarios Disponibles</Link></p>
          <p><Link to='/'>Contáctanos</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Modal