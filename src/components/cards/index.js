import { avatar } from "../avatar";
import "./card.css";
/**
 * @typedef { Object } CardProps
 * @property { string } CardProps.nome
 * @property { string } CardProps.cargo
 * @property { string } CardProps.img
 * @property { 'light'|'dark' } CardProps.mode
 * @property { boolean } [CardProps.expanded]
 * @property { string } [CardProps.bannerColor]
 * @param { CardProps } props
 */

export function card({ nome, cargo, img, expanded, bannerColor, mode }) {
  if (expanded == true) {
    return `
      <div class="card-expanded ${mode}" style="border: 5px solid ${bannerColor}">
        <div class="body-expanded" >
        ${avatar({ imgSrc: img, descricao: "", format: "circle" })}
        <div class="info-profile">
          <p class="nome"> ${nome}</p>
          <p class="cargo"> ${cargo}</p>
          </div>
        </div>
      </div>
      `;
  } else {
    return `
      <div class="card ${mode}">
        <div class="header" style="background-color: ${bannerColor}">
          ${avatar({ imgSrc: img, descricao: "", format: "circle" })}
        </div>
    
        <div class="body">
          <p class="nome"> ${nome}</p>
          <p class="cargo"> ${cargo}</p>
        </div>
      </div>
      `;
  }
}
