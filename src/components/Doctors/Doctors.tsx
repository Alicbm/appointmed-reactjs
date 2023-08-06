import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { AppContext } from "../AppContext/AppContext";
import './Doctors.css'
import { DoctorType } from "../../types";

const Doctors = () => {
  const { category, setDoctorId } = React.useContext(AppContext)
  const [section, setSection] = React.useState(true)

  const navigate = useNavigate()

  return (
    <div className="Doctors">
      <h1 className="Doctors-title">Nuestros Profesionales de la Salud</h1>
      <div className="Doctors-categories">
        {category.map((item) => (
          <div 
            className="Doctors-categories__category" 
            key={item.id}
          >
            <div className="Doctors-categories__category-head">
              <h2>{item.name}</h2>
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
            <div className="Doctors-categories__category-body">
              {section &&
                item.doctors.map((doctor: DoctorType) => (
                  <div 
                    className="Doctors-categories__category-body__doctor" 
                    key={doctor.id}
                    onClick={
                      () => {
                        navigate('/doctor-profile')
                        setDoctorId((doctor.id))
                      }
                    }
                  >
                    <img src={doctor.image} alt="Guillermo Pascal" />
                    <h3>{doctor.name}</h3>
                    <h4>{doctor.speciality}</h4>
                    <p>{doctor.city}, Colombia</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
