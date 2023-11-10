import { avatar } from '../Avatar/indice'
import './card.css'

/**
 * @typedef {Object} CardProps
 * @property {string} CardProps.img - some description here
 * @property {string} CardProps.nome - some description here
 * @property {string} CardProps.cargo - some description here
 * 
 * 
 * @param {CardProps} props
 */

export function card({nome, cargo, img}){
    return `<div class="card">
    <div class="header">
        ${avatar({imgSrc: img, descricao: 'profile picture ' + nome})}
    </div>
    <div class="body">
        <p>Nome: ${nome}</p>
        <p>Cargo: ${cargo}</p>
    </div>
</div>
    `
}