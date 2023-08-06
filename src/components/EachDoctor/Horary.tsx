import React from "react";
import './Horary.css'
import { AppContext } from "../AppContext/AppContext";

const Horary = () => {

  const { doctorSelected } = React.useContext(AppContext)
  const morning = doctorSelected?.morning
  const afternoon = doctorSelected?.afternoon 

  return (
    <div className="Horary">
      <div className="Horary-container">
        <div className="Horary-container__day">
          <p>Mañana</p>
          <p>Tarde</p>
        </div>
        <div className="Horary-container__hour design-blue">
          <p className="Horary-container__hour-day">Lunes</p>
          <p className="Horary-container__hour-hour">{morning?.monday.start}:00 AM - {morning?.monday.end}:00 PM</p>
          <p className="Horary-container__hour-hour">{afternoon?.monday.start}:00 PM - {afternoon?.monday.end}:00 PM</p>
        </div>
        <div className="Horary-container__hour">
          <p className="Horary-container__hour-day">Martes</p>
          <p className="Horary-container__hour-hour">{morning?.tuesday.start}:00 AM - {morning?.tuesday.end}:00 PM</p>
          <p className="Horary-container__hour-hour">{afternoon?.tuesday.start}:00 PM - {afternoon?.tuesday.end}:00 PM</p>
        </div>
        <div className="Horary-container__hour design-blue">
          <p className="Horary-container__hour-day">Miércoles</p>
          <p className="Horary-container__hour-hour">{morning?.wednesday.start}:00 AM - {morning?.wednesday.end}:00 PM</p>
          <p className="Horary-container__hour-hour">{afternoon?.wednesday.start}:00 PM - {afternoon?.wednesday.end}:00 PM</p>
        </div>
        <div className="Horary-container__hour">
          <p className="Horary-container__hour-day">Jueves</p>
          <p className="Horary-container__hour-hour">{morning?.thursday.start}:00 AM - {morning?.thursday.end}:00 PM</p>
          <p className="Horary-container__hour-hour">{afternoon?.thursday.start}:00 PM - {afternoon?.thursday.end}:00 PM</p>
        </div>
        <div className="Horary-container__hour design-blue">
          <p className="Horary-container__hour-day">Viernes</p>
          <p className="Horary-container__hour-hour">{morning?.friday.start}:00 AM - {morning?.friday.end}:00 PM</p>
          <p className="Horary-container__hour-hour">{afternoon?.friday.start}:00 PM - {afternoon?.friday.end}:00 PM</p>
        </div>
      </div>
      <div className="Horary-container__button">
        <button>Agendar Cita</button>
      </div>
    </div>
  );
};

export default Horary;
