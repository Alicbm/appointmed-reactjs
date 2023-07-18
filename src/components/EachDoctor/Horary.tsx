import React from "react";
import './Horary.css'

const Horary = () => {
  return (
    <div className="Horary">
      <div className="Horary-container">
        <div className="Horary-container__day">
          <p>Mañana</p>
          <p>Tarde</p>
        </div>
        <div className="Horary-container__hour design-blue">
          <p className="Horary-container__hour-day">Lunes</p>
          <p className="Horary-container__hour-hour">7:00 AM - 12:00 PM</p>
          <p className="Horary-container__hour-hour">2:00 PM - 5:00 PM</p>
        </div>
        <div className="Horary-container__hour">
          <p className="Horary-container__hour-day">Martes</p>
          <p className="Horary-container__hour-hour">7:00 AM - 12:00 PM</p>
          <p className="Horary-container__hour-hour">2:00 PM - 5:00 PM</p>
        </div>
        <div className="Horary-container__hour design-blue">
          <p className="Horary-container__hour-day">Miércoles</p>
          <p className="Horary-container__hour-hour">7:00 AM - 12:00 PM</p>
          <p className="Horary-container__hour-hour">2:00 PM - 5:00 PM</p>
        </div>
        <div className="Horary-container__hour">
          <p className="Horary-container__hour-day">Jueves</p>
          <p className="Horary-container__hour-hour">7:00 AM - 12:00 PM</p>
          <p className="Horary-container__hour-hour">2:00 PM - 5:00 PM</p>
        </div>
        <div className="Horary-container__hour design-blue">
          <p className="Horary-container__hour-day">Viernes</p>
          <p className="Horary-container__hour-hour">7:00 AM - 12:00 PM</p>
          <p className="Horary-container__hour-hour">2:00 PM - 5:00 PM</p>
        </div>
      </div>
      <div className="Horary-container__button">
        <button>Agendar Cita</button>
      </div>
    </div>
  );
};

export default Horary;
