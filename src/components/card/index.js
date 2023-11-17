import { avatar } from '../avatar'
import './card.css'


/**
 * @typedef {Object} CardProps
 * @property {string} CardProps.nome
 * @property {string} CardProps.cargo 
 * @property {string} CardProps.img 
 * 
 * @param {CardProps} props
 */

export function card({ nome, cargo, img }) {

  return `
  <div class="card-container">
    <div class="image">
        ${avatar({ imgSrc: img, descricao: `profile picture from ${nome}` })}
    </div>
    <p> Nome: ${nome} </p>
    <p> Cargo: ${cargo} </p>
  </div>
  `;
}