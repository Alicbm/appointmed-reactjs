import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import './ModalDoctors.css'
import { AppContext } from '../AppContext/AppContext'
import { DoctorType } from '../../types'

interface Modal{
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalDoctors = ({ modal, setModal }:Modal) => {
  const { doctors } = React.useContext(AppContext)

  return (
    <div className={modal ? "ModalDoctors show" : "ModalDoctors unshow"}>
      <div className="ModalDoctors-modal">
        <div className="ModalDoctors-modal__title">
          <h2>Doctores</h2>
          <span
            className="Modal-content__close"
            onClick={() => setModal(false)}
          >
            <RiCloseFill />
          </span>
        </div>
        <p className="ModalDoctors-modal__head">Todos los Doctores</p>
        <ul className="ModalDoctors-modal__list">
          {doctors.map((doctor: DoctorType) => (
            <li className="ModalDoctors-modal__list-item" key={doctor?.id}>
              <h3>{doctor?.name}</h3>
              <p>{doctor?.speciality}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ModalDoctors