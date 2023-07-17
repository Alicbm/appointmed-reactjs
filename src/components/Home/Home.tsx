import React from 'react'
import { MdEmail } from 'react-icons/md'

import welcome from '../../img/welcome.jpg'
import ginecologia from '../../img/ginecologia.png'
import medicinaGeneral from '../../img/medicina-general.png'
import odontologia from '../../img/odontologia.png'
import oftalmologia from '../../img/oftalmologia.png'
import psiquiatria from '../../img/psiquiatria.png'
import pediatria from '../../img/pediatria.png'

import ContactUs from './ContactUs'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className='Home-add'>
        <div></div>
        <p><span><MdEmail /></span>Contáctanos</p>
      </div>
      <div className='Home-welcome'>
        <h2>Citas Médicas</h2>
        <p>¡Bienvenido a nuestra clínica médica y a nuestra innovadora aplicación de agendamiento de citas! Estamos encantados de presentarte un servicio excepcional y personalizado que transformará tu experiencia en la gestión de citas médicas.</p>
        <div className='Home-welcome_img'>
          <img src={welcome} alt="" />
        </div>
      </div>
      <div className='Home-services'>
        <h2>Tus Servicios Destacados</h2>
        <div className='Home-services__service'>
          <img src={psiquiatria} alt="Psiquiatría" />
          <p>Psiquiatría</p>
        </div>
        <div className='Home-services__service'>
          <img src={pediatria} alt="Pediatría" />
          <p>Pediatría</p>
        </div>
        <div className='Home-services__service'>
          <img src={medicinaGeneral} alt="Medicina General" />
          <p>Medicina General</p>
        </div>
        <div className='Home-services__service'>
          <img src={oftalmologia} alt="Oftalmología" />
          <p>Oftalmología</p>
        </div>
        <div className='Home-services__service'>
          <img src={odontologia} alt="Odontología" />
          <p>Odontología</p>
        </div>
        <div className='Home-services__service'>
          <img src={ginecologia} alt="Ginecología" />
          <p>Ginecología</p>
        </div>
      </div>
      <ContactUs />
    </div>
  )
}

export default Home