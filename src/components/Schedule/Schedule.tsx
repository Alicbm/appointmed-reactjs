import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Schedule.css";
import { AppContext } from "../AppContext/AppContext";

interface State {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  title: string
}


const Schedule = ({ state, setState, title }: State) => {
  const { doctors } = React.useContext(AppContext)
  
  // const elements: any[] = []

  // function list(start: number, end: number){
  //   let numbers = []

  //   if(end > start){
  //     for (let i = start; i < end + 1; i++) {
  //       numbers.push(i)
  //     }
  //   }

  //   return numbers
  // }    

  return (
    <div className="Schedule-horaries">
      <div className="Schedule-horaries__morning">
        <div className="Schedule-horaries__morning-header">
          <h2>{title}</h2>
          {state ? (
            <span onClick={() => setState(!state)}>
              <IoIosArrowDown />
            </span>
          ) : (
            <span onClick={() => setState(!state)}>
              <IoIosArrowUp />
            </span>
          )}
        </div>
        {state && (
          <div className="Schedule-horaries__morning-body">
            {doctors.map((doctor) => (
              <div className="Schedule-horaries__morning-body__content">
                <div className="Schedule-horaries__morning-body__content-name">
                  <h4>{doctor?.name}</h4>
                  <p>{doctor?.speciality}</p>
                </div>
                <p className="Schedule-horaries__morning-body__content-day">
                  {doctor?.morning.monday?.day}
                </p>
                <p className="Schedule-horaries__morning-body__content-hour">
                {doctor?.morning.monday?.start}:00 AM - {doctor?.morning.monday?.end}:00 AM
                </p>
              </div>
            ))}
            {/* 
            <div className="Schedule-horaries__morning-body__content">
              <div className="Schedule-horaries__morning-body__content-name">
                <h4>Guillermo Pascal</h4>
                <p>Médico General</p>
              </div>
              <p className="Schedule-horaries__morning-body__content-day">
                Lunes
              </p>
              <p className="Schedule-horaries__morning-body__content-hour">
                7:00 AM - 8:00 AM
              </p>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
