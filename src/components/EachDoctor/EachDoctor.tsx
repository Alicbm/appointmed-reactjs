import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import doctor from '../../img/doctor.png'
import Horary from './Horary'
import './EachDoctor.css'

const EachDoctor = () => {
  return (
    <div className='EachDoctor'>
      <div className='EachDoctor-profile'>
        <img src={doctor} alt="" />
        <h1>Guillermo Pascal</h1>
        <h3>Médico General</h3>
        <h4>pascal@mail.com</h4>
        <h4>Santa Marta, Colombia</h4>
        <p>Nuestro Compromiso es Contigo</p>
      </div>
      <Horary />
      <div className='EachDoctor-writeComment'>
        <h2 className='EachDoctor-writeComment__title'>Déjanos sabur tu opinión sobre el Dr. Guillermo Pascal</h2>
        <textarea placeholder='Escribe un comentario...'></textarea>
        <div className='EachDoctor-writeComment__buttons'>
          <button>Malo</button>
          <button>Bueno</button>
          <button>Excelente</button>
        </div>
        <button className='EachDoctor-writeComment__send'>Enviar Comentario</button>
      </div>
      <div className='EachDoctor-comments'>
        <h2 className='EachDoctor-comments__title'>Descubre lo que opinan otros usuarios del Dr. Guillermo Pascal</h2>
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