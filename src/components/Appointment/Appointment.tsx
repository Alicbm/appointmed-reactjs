import React from 'react'
import './Appointment.css'
import Schedule from '../Schedule/Schedule';

const Appointment = () => {
  const [morning, setMorning] = React.useState(true)
  const [afternoon, setAfternoon] = React.useState(true)
  
  return (
    <div className="Appointment">
      <h1>Agenda tu cita con Nuestros Mejores Profesionales</h1>
      <div className="Appointment-lists">
        <h2>Selecciona tu Servicio:</h2>
        <select name="services">
          <option value="medicinaGeneral">Medicina General</option>
          <option value="psiquiatria">Psiquiatría</option>
          <option value="odontologia">Odontología</option>
          <option value="oftalmologia">Oftalmología</option>
        </select>
        <h2>Selecciona tu Médico:</h2>
        <select name="doctors">
          <option value="guillermoPascal">Guillermo Pascal</option>
          <option value="guillermoPascal">Guillermo Pascal</option>
          <option value="guillermoPascal">Guillermo Pascal</option>
          <option value="guillermoPascal">Guillermo Pascal</option>
        </select>
      </div>
      <Schedule 
        state={morning} 
        setState={setMorning}
        title='Horario de la Mañana'
      />
      <Schedule 
        state={afternoon} 
        setState={setAfternoon}
        title='Horario de la Tarde'
      />
    </div>
  );
}

export default Appointment