import { avatar } from "../avatar";
import './card.css'

/**
 * @typedef {*} CardProps //*troca por Object?*//
 * @property {string} CardProps.nome
 * @property {string} CardProps.cargo
 * @property {string} CardProps.img
 * @param {CardProps} param0 
 * 
 */

export function card(props) {
    const {nome, cargo, img} = props;
    return `<div class="card">
        <div class="header">
            ${avatar({
                imgSrc: img, 
                descricao:`profile picture from ${nome
            }`)}
        </div>
        <div class="body">
        <p class="nome">${nome}</p>
        <p class="cargo">${cargo}</p>
        </div>
    </div>`;    
  }
