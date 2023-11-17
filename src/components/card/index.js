import { avatar } from "../avatar";
import "./card.css";

/**
 * @typedef {Object} CardProps
 * @property {string} CardProps.nome - some description here
 * @property {string} CardProps.cargo - some description here
 * @property {string} CardProps.img - some description here
 * @property {boolean} CardProps.expanded - some description here
 *
 * @param {CardProps} props
 */
export function card({ nome, cargo, img, expanded }) {
  if (expanded) {
    return `
    <div class="card">
      <div class="header">
        ${avatar({
          square: true,
          imgSrc: img,
          descricao: "profile picture from" + nome,
        })}
      </div>
      <div class="body">
        <p>Nome: ${nome}</p>
        <p>Cargo: ${cargo}</p>
      </div>
    </div>
  `;
  } else {
    return `
    <div class="card">
      <div class="header">
        ${avatar({
          square: false,
          imgSrc: img,
          descricao: "profile picture from" + nome,
        })}
      </div>
      <div class="body">
        <p>Nome: ${nome}</p>
        <p>Cargo: ${cargo}</p>
      </div>
    </div>
  `;
  }
}
