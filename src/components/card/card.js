
import { avatar } from "../avatar/avatar"
import "./card.css"


/**
 * @typedef {object} CardProps
 * @property {string} CardProps.nome
 * @property {string} CardProps.cargo
 * @property {string} CardProps.img
 * 
 * @param {CardProps} props
 */
export function card({nome, cargo, img}) {
    
    return `<div class="card">
        <div class="header">
        ${avatar({imgSrc: img, descricao: 'profile picture from ' + nome})}
        </div>
    
        <div class="body">
        <p>Nome: ${nome}</p>
        <p>Cargo: ${cargo}</p>
        </div>
    </div>`
}
  
