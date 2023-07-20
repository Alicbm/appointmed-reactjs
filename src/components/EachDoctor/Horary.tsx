import React from "react";
import './Horary.css'
import { AppContext } from "../AppContext/AppContext";

const Horary = () => {

  const { doctorSelected } = React.useContext(AppContext)
  const morning = doctorSelected.morning_schedule
  const afternoon = doctorSelected.afternoon_schedule  

  return (
    <div className="Horary">
      <div className="Horary-container">
        <div className="Horary-container__day">
          <p>Mañana</p>
          <p>Tarde</p>
        </div>
        <div className="Horary-container__hour design-blue">
          <p className="Horary-container__hour-day">Lunes</p>
          <p className="Horary-container__hour-hour">{morning?.mondayStart}:00 AM - {morning?.mondayEnd}:00 PM</p>
          <p className="Horary-container__hour-hour">{afternoon?.mondayStart}:00 PM - {afternoon?.mondayEnd}:00 PM</p>
        </div>
        <div className="Horary-container__hour">
          <p className="Horary-container__hour-day">Martes</p>
          <p className="Horary-container__hour-hour">{morning?.tuesdayStart}:00 AM - {morning?.tuesdayEnd}:00 PM</p>
          <p className="Horary-container__hour-hour">{afternoon?.tuesdayEnd}:00 PM - {afternoon?.tuesdayEnd}:00 PM</p>
        </div>
        <div className="Horary-container__hour design-blue">
          <p className="Horary-container__hour-day">Miércoles</p>
          <p className="Horary-container__hour-hour">{morning?.wednesdayStart}:00 AM - {morning?.wednesdayEnd}:00 PM</p>
          <p className="Horary-container__hour-hour">{afternoon?.wednesdayStart}:00 PM - {afternoon?.wednesdayEnd}:00 PM</p>
        </div>
        <div className="Horary-container__hour">
          <p className="Horary-container__hour-day">Jueves</p>
          <p className="Horary-container__hour-hour">{morning?.thursdayStart}:00 AM - {morning?.thursdayEnd}:00 PM</p>
          <p className="Horary-container__hour-hour">{afternoon?.thursdayStart}:00 PM - {afternoon?.thursdayEnd}:00 PM</p>
        </div>
        <div className="Horary-container__hour design-blue">
          <p className="Horary-container__hour-day">Viernes</p>
          <p className="Horary-container__hour-hour">{morning?.fridayStart}:00 AM - {morning?.fridayEnd}:00 PM</p>
          <p className="Horary-container__hour-hour">{afternoon?.fridayStart}:00 PM - {afternoon?.fridayEnd}:00 PM</p>
        </div>
      </div>
      <div className="Horary-container__button">
        <button>Agendar Cita</button>
      </div>
    </div>
  );
};

export default Horary;
