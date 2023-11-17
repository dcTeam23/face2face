import { avatar } from "../avatar";
import "./card.css"
/**
 * @typedef { Object } CardProps
 * @property { string } CardProps.nome
 * @property { string } CardProps.cargo
 * @property { string } CardProps.img 
 * @property {boolean} CardProps.expend
 * @param { CardProps } props
 */

export function card({ nome, cargo, img, expend }) {
    if (expend) {
        return `
            <div class="card">
                <div class="container">
                    <div class="header">
                        ${avatar({ imgSrc: img, descricao: "" })}
                    </div>
                    
                </div>
            </div>
            <style>
            img {
                width: 120px;
                height: 120px;
            }
            </style>
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
