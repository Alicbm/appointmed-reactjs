import React from 'react'
import Info from './Info'
import Modify from './Modify'
import './SignIn.css'

const SignIn = () => {
  const [edit, setEdit] = React.useState <boolean> (false)

  // const sendData = () => {
  //   const newData = {
      
  //   };

  //   fetch("http://localhost:3000/api/v1/auth/login", {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {

  //       if (data.user.id){
          
  //       } else {
  //         alert('El usuario o la contraseña es incorrecto')
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error al enviar el formulario:", error);
  //     });
  // }

  return (
    <div className='SignIn'>
      <h1 className='SignIn-title'>Perfil del Usuario</h1>
      { !edit ? <Info setEdit={setEdit} /> : <Modify setEdit={setEdit} /> }
    </div>
  )
}

export default SignIn