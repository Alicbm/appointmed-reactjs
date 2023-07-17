import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import doctor from '../../img/doctor.png'
import './Doctors.css'

const Doctors = () => {
  const [section, setSection] = React.useState(true)

  return (
    <div className="Doctors">
      <h1 className="Doctors-title">Nuestros Profesionales de la Salud</h1>
      <div className="Doctors-categories">
        <div className="Doctors-categories__category">
          <div className="Doctors-categories__category-head">
            <h2>Médicos Generales</h2>
            {section ? (
              <span onClick={() => setSection(!section)}>
                <IoIosArrowDown />
              </span>
            ) : (
              <span onClick={() => setSection(!section)}>
                <IoIosArrowUp />
              </span>
            )}
          </div>
          {section && (
            <div className="Doctors-categories__category-body">
              <div className="Doctors-categories__category-body__doctor">
                <img src={doctor} alt="Guillermo Pascal" />
                <h3>Guilermo Pascal</h3>
                <h4>Médico General</h4>
                <p>Santa Marta, Colombia</p>
              </div>
              <div className="Doctors-categories__category-body__doctor">
                <img src={doctor} alt="Guillermo Pascal" />
                <h3>Guilermo Pascal</h3>
                <h4>Médico General</h4>
                <p>Santa Marta, Colombia</p>
              </div>
              <div className="Doctors-categories__category-body__doctor">
                <img src={doctor} alt="Guillermo Pascal" />
                <h3>Guilermo Pascal</h3>
                <h4>Médico General</h4>
                <p>Santa Marta, Colombia</p>
              </div>
              <div className="Doctors-categories__category-body__doctor">
                <img src={doctor} alt="Guillermo Pascal" />
                <h3>Guilermo Pascal</h3>
                <h4>Médico General</h4>
                <p>Santa Marta, Colombia</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
