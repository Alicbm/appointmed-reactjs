import React from "react";
import { AppContext } from "../AppContext/AppContext";
import { BiSolidPencil } from "react-icons/bi";
import './Info.css'

interface State {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const Info = ({ setEdit }: State) => {
  const { userLogin } = React.useContext(AppContext);

  return (
    <>
      <div className="Info">
        <div className="Info-item">
          <h2>Nombre:</h2>
          <p>{userLogin?.name}</p>
        </div>
        <span className="Info-edit" onClick={() => setEdit(true)}>
          <BiSolidPencil />
        </span>
      </div>
      <div className="Info">
        <div className="Info-item">
          <h2>Email:</h2>
          <p>{userLogin?.email}</p>
        </div>
        <span className="Info-edit" onClick={() => setEdit(true)}>
          <BiSolidPencil />
        </span>
      </div>
      <div className="Info">
        <div className="Info-item">
          <h2>Número de Teléfono:</h2>
          <p>{userLogin?.cellphone}</p>
        </div>
        <span className="Info-edit" onClick={() => setEdit(true)}>
          <BiSolidPencil />
        </span>
      </div>
      <div className="Info">
        <div className="Info-item">
          <h2>Ciudad de Residencia:</h2>
          <p>{userLogin?.city}, Colombia</p>
        </div>
        <span className="Info-edit" onClick={() => setEdit(true)}>
          <BiSolidPencil />
        </span>
      </div>
      <div className='Info-buttons'>
        <button>Cambiar Contraseña</button>
        <button>Eliminar Cuenta</button>
      </div>
    </>
  );
};

export default Info;
