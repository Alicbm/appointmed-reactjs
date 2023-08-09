import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { AppContext } from '../AppContext/AppContext'

const Login = () => {
  const { setUserLogin, setToken } = React.useContext(AppContext)

  const data = {
    email: '',
    password: '',
  }

  const navigate = useNavigate()

  const sendData = () => {
    const newData = {
      email: data.email,
      password: data.password,
    };

    fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => {

        if (data.user.id){
          setUserLogin(data.user);
          setToken(data.token)
          navigate("/profile");
        } else {
          alert('El usuario o la contraseña es incorrecto')
        }
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
      });
  }

  return (
    <div className='Login'>
      <h1 className='Login-title'>Iniciar Sesión</h1>
      <div className='Login-data'>
        <h2>Ingresa tu Email:</h2>
        <input 
          type="text" 
          placeholder='example123@mail.com'
          onChange={(event) => data['email'] = event.target.value}
        />
        <h2>Ingresa tu Contraseña:</h2>
        <input 
          type="password" 
          placeholder='password123'
          onChange={(event) => data['password'] = event.target.value}
        />
        <p><Link to=''>¿Olvidaste tu contraseña?</Link></p>
        <button 
          className='Login-data__button'
          onClick={sendData}
        >
          Ingresar
        </button>
      </div>
    </div>
  )
}

export default Login