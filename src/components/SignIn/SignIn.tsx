import React from 'react'
import { BiSolidPencil } from 'react-icons/bi'
import { AppContext } from '../AppContext/AppContext'
import './SignIn.css'

const SignIn = () => {

  const { userLogin } = React.useContext(AppContext)

  return (
    <div className='SignIn'>
      <h1 className='SignIn-title'>Perfil del Usuario</h1>
      <div className='SignIn-container'>
        <div className='SignIn-container__item'>
          <h2>Nombre:</h2>
          <p>{userLogin?.name}</p>
        </div>
        <span className='SignIn-container__edit'><BiSolidPencil /></span>
      </div>
      <div className='SignIn-container'>
        <div className='SignIn-container__item'>
          <h2>Email:</h2>
          <p>{userLogin?.email}</p>
        </div>
        <span className='SignIn-container__edit'><BiSolidPencil /></span>
      </div>
      <div className='SignIn-container'>
        <div className='SignIn-container__item'>
          <h2>Número de Teléfono:</h2>
          <p>{userLogin?.cellphone}</p>
        </div>
        <span className='SignIn-container__edit'><BiSolidPencil /></span>
      </div>
      <div className='SignIn-container'>
        <div className='SignIn-container__item'>
          <h2>Ciudad de Residencia:</h2>
          <p>{userLogin?.city}, Colombia</p>
        </div>
        <span className='SignIn-container__edit'><BiSolidPencil /></span>
      </div>
      <div className='SignIn-container__buttons'>
        <button>Cambiar Contraseña</button>
        <button>Eliminar Cuenta</button>
      </div>
    </div>
  )
}

export default SignIn