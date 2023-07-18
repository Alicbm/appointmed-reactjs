import React from 'react'
import logo from '../../img/appointmed_logo.png'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='SignUp'>
      <img src={logo} alt="AppointMed" />
      <div className='SignUp-container'>
        <div className='SignUp-container__item'>
          <h2>Nombre:</h2>
          <input type="text" placeholder='Escribe tu nombre...'/>
        </div>
        <div className='SignUp-container__item'>
          <h2>Email:</h2>
          <input type="text" placeholder='Escribe tu email...'/>
          <p>Si olvidas tu contraseña podrás recuperar tu cuenta a través de  el correo que ingreses, por lo tanto utiliza un correo valido.</p>
        </div>
        <div className='SignUp-container__item'>
          <h2>Número de Teléfono::</h2>
          <input type="text" placeholder='Escribe tu número de teléfono...'/>
        </div>
        <div className='SignUp-container__item'>
          <h2>Ciudad de Residencia:</h2>
          <input type="text" placeholder='Ciudad de residencia...'/>
        </div>
        <div className='SignUp-container__item'>
          <h2>Crea tu Contraseña:</h2>
          <input type="text" placeholder='Crea una contraseña...'/>
        </div>
        <div className='SignUp-container__item'>
          <h2>Confirma tu Contraseña:</h2>
          <input type="text" placeholder='Confirma tu contraseña...'/>
        </div>
        <button className='SignUp-container__button'>Crear Usuario</button>
      </div>
    </div>
  )
}

export default SignUp