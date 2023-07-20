import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import Horary from './Horary'
import { AppContext } from '../AppContext/AppContext'
import './EachDoctor.css'

const EachDoctor = () => {
  const { doctorSelected } = React.useContext(AppContext)

  return (
    <div className='EachDoctor'>
      <div className='EachDoctor-profile'>
        <img src={doctorSelected.image} alt="" />
        <h1>{doctorSelected.name}</h1>
        <h3>{doctorSelected.speciality}</h3>
        <h4>{doctorSelected.email}</h4>
        <h4>{doctorSelected.city}, Colombia</h4>
        <p>Nuestro Compromiso es Contigo</p>
      </div>
      <Horary />
      <div className='EachDoctor-writeComment'>
        <h2 className='EachDoctor-writeComment__title'>Déjanos saber tu opinión sobre el Dr. {doctorSelected.name}</h2>
        <textarea placeholder='Escribe un comentario...'></textarea>
        <div className='EachDoctor-writeComment__buttons'>
          <button>Malo</button>
          <button>Bueno</button>
          <button>Excelente</button>
        </div>
        <button className='EachDoctor-writeComment__send'>Enviar Comentario</button>
      </div>
      <div className='EachDoctor-comments'>
        <h2 className='EachDoctor-comments__title'>Descubre lo que opinan otros usuarios del Dr. {doctorSelected.name}</h2>
        <div className='EachDoctor-comments__container'>
          <div className='EachDoctor-comments__container-comment'>
            <div className='EachDoctor-comments__container-comment__head'>
              <h3>Alic Barandica</h3>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
            </div>
            <p>¡El doctor Pascal es increíble! Su atención y conocimiento son impresionantes. Me siento agradecido por su cuidado excepcional.</p>
          </div>
          <div className='EachDoctor-comments__container-comment'>
            <div className='EachDoctor-comments__container-comment__head'>
              <h3>Alic Barandica</h3>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
            </div>
            <p>¡El doctor Pascal es increíble! Su atención y conocimiento son impresionantes. Me siento agradecido por su cuidado excepcional.</p>
          </div>
          <div className='EachDoctor-comments__container-comment'>
            <div className='EachDoctor-comments__container-comment__head'>
              <h3>Alic Barandica</h3>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
            </div>
            <p>¡El doctor Pascal es increíble! Su atención y conocimiento son impresionantes. Me siento agradecido por su cuidado excepcional.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EachDoctor