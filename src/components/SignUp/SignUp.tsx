import React from 'react'
import logo from '../../img/appointmed_logo.png'
import './SignUp.css'

const SignUp = () => {
  const data = {
    name: '',
    email: '',
    cellphone: '',
    city: '',
    password: '',
    repeatPassword: ''
  }

  const sendData = () => {

   const newData = {
    name: data.name,
    email: data.email,
    cellphone: data.cellphone,
    city: data.city,
    password: data.password,
    role: 'user'
   }

    if (data.password === data.repeatPassword){

      fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Respuesta del servidor:', data);
        })
        .catch((error) => {
          console.error('Error al enviar el formulario:', error);
        });

      }else{
      alert('Las contraseñas no coinciden')
    }
  }

  return (
    <div className='SignUp'>
      <img src={logo} alt="AppointMed" />
      <div className='SignUp-container'>
        <div className='SignUp-container__item'>
          <h2>Nombre:</h2>
          <input 
            type="text" 
            placeholder='Escribe tu nombre...'
            onChange={(event) => data['name'] = event.target.value}
          />
        </div>
        <div className='SignUp-container__item'>
          <h2>Email:</h2>
          <input 
            type="email" 
            placeholder='Escribe tu email...'
            onChange={(event) => data['email'] = event.target.value}
          />
          <p>Si olvidas tu contraseña podrás recuperar tu cuenta a través de  el correo que ingreses, por lo tanto utiliza un correo valido.</p>
        </div>
        <div className='SignUp-container__item'>
          <h2>Número de Teléfono:</h2>
          <input 
            type="text" 
            placeholder='Escribe tu número de teléfono...'
            onChange={(event) => data['cellphone'] = event.target.value}
          />
        </div>
        <div className='SignUp-container__item'>
          <h2>Ciudad de Residencia:</h2>
          <input 
            type="text" 
            placeholder='Ciudad de residencia...'
            onChange={(event) => data['city'] = event.target.value}
          />
        </div>
        <div className='SignUp-container__item'>
          <h2>Crea tu Contraseña:</h2>
          <input 
            type="password" 
            placeholder='Crea una contraseña...'
            onChange={(event) => data['password'] = event.target.value}
          />
        </div>
        <div className='SignUp-container__item'>
          <h2>Confirma tu Contraseña:</h2>
          <input 
            type="password" 
            placeholder='Confirma tu contraseña...'
            onChange={(event) => {
              data['repeatPassword'] = event.target.value
            }}
          />
        </div>
        <button 
          className='SignUp-container__button'
          onClick={sendData}
        >
            Crear Usuario
        </button>
      </div>
    </div>
  )
}

export default SignUp