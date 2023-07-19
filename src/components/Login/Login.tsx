import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='Login'>
      <h1 className='Login-title'>Iniciar Sesión</h1>
      <div className='Login-data'>
        <h2>Ingresa tu Email:</h2>
        <input type="text" placeholder='example123@mail.com'/>
        <h2>Ingresa tu Contraseña:</h2>
        <input type="text" placeholder='password123'/>
        <p><Link to=''>¿Olvidaste tu contraseña?</Link></p>
        <button className='Login-data__button'>Ingresar</button>
      </div>
    </div>
  )
}

export default Login