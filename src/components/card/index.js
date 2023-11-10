import { avatar } from "../avatar";
import './card.css'

/**
 * @typedef {*} CardProps
 * @property {string} CardProps.nome
 * @property {string} CardProps.cargo
 * @property {string} CardProps.img
 * @param {CardProps} param0 
 * 
 */

export function card({nome, cargo, img}) {
    return `<div class="card">
        <div class="header">
            ${avatar({
                imgSrc: img, 
                descricao:'profile picture from' + nome
            })}
        </div>

        <div class="body">
        <p>Nome: ${nome}</p>
        <p>Cargo: ${cargo}</p>
        </div>
    </div>`;    
  }