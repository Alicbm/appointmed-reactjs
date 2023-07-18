import React from "react";
import doctor from "../../img/doctor.png";
import './EachSchedule.css'
import Schedule from "./Schedule";

const EachSchedule = () => {
  const [morning, setMorning] = React.useState(true)
  const [afternoon, setAfternoon] = React.useState(true)

  return (
    <div className="EachSchedule">
      <h1 className="EachSchedule-title">Horarios para Medicina General</h1>
      <div className="EachSchedule-carousel">
        <div className="EachSchedule-carousel__doctor">
          <img src={doctor} alt="Guillermo Pascal" />
          <h3>Guilermo Pascal</h3>
          <h4>Médico General</h4>
          <p>Santa Marta, Colombia</p>
        </div>
        <div className="EachSchedule-carousel__doctor">
          <img src={doctor} alt="Guillermo Pascal" />
          <h3>Guilermo Pascal</h3>
          <h4>Médico General</h4>
          <p>Santa Marta, Colombia</p>
        </div>
        <div className="EachSchedule-carousel__doctor">
          <img src={doctor} alt="Guillermo Pascal" />
          <h3>Guilermo Pascal</h3>
          <h4>Médico General</h4>
          <p>Santa Marta, Colombia</p>
        </div>
        <div className="EachSchedule-carousel__doctor">
          <img src={doctor} alt="Guillermo Pascal" />
          <h3>Guilermo Pascal</h3>
          <h4>Médico General</h4>
          <p>Santa Marta, Colombia</p>
        </div>
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
};

export default EachSchedule;
