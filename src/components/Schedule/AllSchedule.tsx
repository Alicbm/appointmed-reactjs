import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import ModalDoctors from './ModalDoctors';
import Schedule from './Schedule';
import './AllSchedules.css'

const AllSchedule = () => {
  const [modal, setModal] = React.useState(false)
  const [morning, setMorning] = React.useState(true)
  const [afternoon, setAfternoon] = React.useState(true)

  return (
    <div className="AllSchedule">
      <div 
        className="AllSchedule-header"
        onClick={() => setModal(true)}
      >
        <p>Doctors</p>
        <span>
          <MdOutlineKeyboardArrowRight />
        </span>
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
      
      <ModalDoctors modal={modal} setModal={setModal}/> 
    </div>
  );
}

export default AllSchedule