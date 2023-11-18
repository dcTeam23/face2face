import { avatar } from "../avatar";
import "./card.css"
/**
 * @typedef { Object } CardProps
 * @property { string } CardProps.nome
 * @property { string } CardProps.cargo
 * @property { string } CardProps.img 
 * @property {boolean} CardProps.square
 * @param { CardProps } props
 */

export function card({ nome, cargo, img, square }) {
    if (square) {
        return `
        <div class="card">
            <div class="container">
                <div class="header">
                    ${avatar({ imgSrc: img, descricao: "" })}
                </div>
                <div class="body">
                    <p class="nome"> ${nome}</p>
                    <p class="cargo"> ${cargo}</p>
                </div>
            </div>
        </div>
        `;
        } else {
    return `
    <div class="card">
            <div class="container">
                <div class="header">
                    ${avatar({ imgSrc: img, descricao: "" })}
                </div>
                <div class="body">
                    <p class="nome"> ${nome}</p>
                    <p class="cargo"> ${cargo}</p>
                </div>
            </div>
        </div>
        `;
    } }
