import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='ContactUs'>
      <h2 className='ContactUs-title'>Contáctanos</h2>
      <h3 className='ContactUs-subtitle'>Tu Correo Electrónico:</h3>
      <input 
        type="text" 
        placeholder='Escribe tu correo...'
        className='ContactUs-input'
      />
      <h3 className='ContactUs-subtitle'>Asunto:</h3>
      <input 
        type="text" 
        placeholder='Escribe el asunto...'
        className='ContactUs-input'  
      />
      <h3 className='ContactUs-subtitle'>Información:</h3>
      <textarea 
        placeholder='Escribe la información...'
        className='ContactUs-textarea'  
      ></textarea>
      <button className='ContactUs-button'>Enviar Mensaje</button>
    </div>
  )
}

export default ContactUs