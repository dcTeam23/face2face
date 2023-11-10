import { avatar } from "../avatar";

/**
 * @typedef { Object } CardProps
 * @property { string } CardProps.nome
 * @property { string } CardProps.cargo
 * @property { string } CardProps.img 
 * @param { CardProps } props
 */

export function card({ nome, cargo, img }) {
  return `
        <div>
            <div class="header">
                ${avatar({ link: "", imgSrc: img, descricao: "" })}
            </div>

            <div class="body">
                <p>Nome: ${nome}</p>
                <p>Cargo: ${cargo}</p>
            </div>


        </div>
    `;
}