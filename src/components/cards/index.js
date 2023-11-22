import { avatar } from "../avatar";
import "./card.css"
/**
 * @typedef { Object } CardProps
 * @property { string } CardProps.nome
 * @property { string } CardProps.cargo
 * @property { string } CardProps.img
 * @property { string } CardProps.Mode
 * @property { boolean } CardProps.expanded
 * @property { boolean } CardProps.SquareC
 * @param { CardProps } props
 */

export function card({ nome, cargo, img, expanded, SquareC, Mode }) {
    if (expanded == true) {
        return `
      <div class="expanded ${Mode}">
            <div class="container-expanded">
                <div class="header-expanded">
                    ${avatar({ imgSrc: img, descricao: "Image of" + nome, square: SquareC })}
                </div>
    
                <div class="expanded-body">
                    <p class="nome-expanded"> ${nome}</p>
                    <p class="cargo-expanded"> ${cargo}</p>
                </div>
    
            </div>
            </div>
        `;
    }
    else {
        return `
      <div class="card ${Mode}">
            <div class="card-container">
                <div class="header">
                    ${avatar({ imgSrc: img, descricao: "Image of" + nome, square: SquareC })}
                </div>
    
                <div class="body">
                    <p class="nome"> ${nome}</p>
                    <p class="cargo"> ${cargo}</p>
                </div>
    
            </div>
            </div>
        `;
    }
}