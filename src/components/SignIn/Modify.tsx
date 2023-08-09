import React from "react";
import { AppContext } from "../AppContext/AppContext";
import "./Modify.css";

interface State {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modify = ({ setEdit }: State) => {
  const { userLogin, setUserLogin } = React.useContext(AppContext);
  const [data, setData] = React.useState({
    name: userLogin?.name,
    email: userLogin?.email,
    cellphone: userLogin?.cellphone,
    city: userLogin?.city,
  });

  const id = String(userLogin?.id);

  const sendData = () => {
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setUserLogin(data))
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
      });
  };

  return (
    <>
      <div className="Modify">
        <div className="Modify-item">
          <h2>Nombre:</h2>
          <input
            type="text"
            value={data["name"]}
            onChange={(event) =>
              setData({
                ...data,
                name: event.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="Modify">
        <div className="Modify-item">
          <h2>Email:</h2>
          <input
            type="text"
            value={data["email"]}
            onChange={(event) =>
              setData({
                ...data,
                email: event.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="Modify">
        <div className="Modify-item">
          <h2>Número de Teléfono:</h2>
          <input
            type="text"
            value={data["cellphone"]}
            onChange={(event) =>
              setData({
                ...data,
                cellphone: event.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="Modify">
        <div className="Modify-item">
          <h2>Ciudad de Residencia:</h2>
          <input
            type="text"
            value={data["city"]}
            onChange={(event) =>
              setData({
                ...data,
                city: event.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="Modify-buttons">
        <button onClick={() => setEdit(false)}>Cancelar Cambios</button>
        <button onClick={() => {
          sendData()
          setEdit(false)
        }}>Guardar Cambios</button>
      </div>
    </>
  );
};

export default Modify;
