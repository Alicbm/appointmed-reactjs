import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import './ModalDoctors.css'

interface Modal{
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalDoctors = ({ modal, setModal }:Modal) => {
  return (
    <div className={modal ? 'ModalDoctors show': 'ModalDoctors unshow'}>
      <div className='ModalDoctors-modal'>
        <div className='ModalDoctors-modal__title'>
          <h2>Doctores</h2>
          <span 
            className='Modal-content__close'
            onClick={() => setModal(false)} 
          ><RiCloseFill /></span>
        </div>
        <p className='ModalDoctors-modal__head'>Todos los Doctores</p>
        <ul className='ModalDoctors-modal__list'>
          <li className='ModalDoctors-modal__list-item'>
            <h3>Guillermo Pascal</h3>
            <p>Médico General</p>
          </li>
          <li className='ModalDoctors-modal__list-item'>
            <h3>Guillermo Pascal</h3>
            <p>Médico General</p>
          </li>
          <li className='ModalDoctors-modal__list-item'>
            <h3>Guillermo Pascal</h3>
            <p>Médico General</p>
          </li>
          <li className='ModalDoctors-modal__list-item'>
            <h3>Guillermo Pascal</h3>
            <p>Médico General</p>
          </li>
          <li className='ModalDoctors-modal__list-item'>
            <h3>Guillermo Pascal</h3>
            <p>Médico General</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ModalDoctors