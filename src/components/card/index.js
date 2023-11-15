import { avatar } from "../avatar";
import './card.css';

/**
 * @typedef { Object } CardProps
 * @property { string } CardProps.nome
 * @property { string } CardProps.cargo
 * @property { string } CardProps.img 
 * @property {string} CardProps.idade
 * @param { CardProps } props
 */

export function card({ nome, cargo, img, idade }) {
    return `
  <div class="card">
  <div class="card-container">
      ${avatar({ imgSrc: img, descricao: "", link: "" })}
      <div class="footer">
      <div class="info">
          <p>${nome}</p>
          <span>${cargo}, ${idade}y <a href="linkedin.com"></a></span>
        </div>
          <div class="button-white"></div>
      </div>
  </div>
</div>
    `;
}