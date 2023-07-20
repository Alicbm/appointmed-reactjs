import React from 'react'
import { MdEmail } from 'react-icons/md'

import welcome from '../../img/welcome.jpg'
// import ginecologia from '../../img/ginecologia.png'
// import medicinaGeneral from '../../img/medicina-general.png'
// import odontologia from '../../img/odontologia.png'
// import oftalmologia from '../../img/oftalmologia.png'
// import psiquiatria from '../../img/psiquiatria.png'
// import pediatria from '../../img/pediatria.png'

import ContactUs from './ContactUs'
import './Home.css'
import { AppContext } from '../AppContext/AppContext'

const Home = () => {
  const { category } = React.useContext(AppContext);

  return (
    <div className="Home">
      <div className="Home-add">
        <div></div>
        <p>
          <span>
            <MdEmail />
          </span>
          Contáctanos
        </p>
      </div>
      <div className="Home-welcome">
        <h2>Citas Médicas</h2>
        <p>
          ¡Bienvenido a nuestra clínica médica y a nuestra innovadora aplicación
          de agendamiento de citas! Estamos encantados de presentarte un
          servicio excepcional y personalizado que transformará tu experiencia
          en la gestión de citas médicas.
        </p>
        <div className="Home-welcome_img">
          <img src={welcome} alt="" />
        </div>
      </div>
      <div className="Home-services">
        <h2>Tus Servicios Destacados</h2>
        {category.map((service) => (
          <div className="Home-services__service" key={service.id}>
            <img src={service?.image} alt="Psiquiatría" />
            <p>{service?.name}</p>
          </div>
        ))}
      </div>
      <ContactUs />
    </div>
  );
}

export default Home