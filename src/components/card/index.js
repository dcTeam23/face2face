import { HobbyIcon } from "../HobbyIcon";
import { avatar } from "../avatar";
import "./card.css";

/**
 * @typedef { Object } CardProps
 * @property { string } CardProps.nome
 * @property { string } CardProps.cargo
 * @property { string } CardProps.img
 * @property {  'academia' | 'cozinhar'| 'dormir'| 'filmes/séries'| 'games'| 'ler'| 'música'| 'programar'| 'viajar' }  CardProps.nameHobby
 * @param { CardProps } props
 */

export function card({ nome, cargo, img, nameHobby }) {
  return `
<div class="card-container">
    <div class="img-container">
        ${avatar({ imgSrc: img, descricao: "" })}
        ${HobbyIcon({ hobby: nameHobby })}
    </div>
    <div class="profile-container">
        <div class="personal-info">
            <p class="nome bold">${nome}</p>
        </div>
        <div class="professional-info">
            <p class="cargo semibold">${cargo}</p>
        </div>
    </div>
</div>
    `;
}
