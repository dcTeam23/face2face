import { avatar } from "../avatar";
import "./card.css"
/**
 * @typedef { Object } CardProps
 * @property { string } CardProps.nome
 * @property { string } CardProps.cargo
 * @property { string } CardProps.img
 * @property { string } CardProps.tec
 * @property { string } CardProps.banner
 * @property { boolean } CardProps.expanded
 * @property { boolean } CardProps.SquareC
 * @param { CardProps } props
 */

export function card({ nome, cargo, img, expanded, SquareC, tec, banner }) {
    if (expanded == true) {
        return `
      <div class="expanded">
            <div class="container-expanded">
                <div class="header-expanded" style="background-image: url(${banner});">
                    ${avatar({ imgSrc: img, descricao: "Image of" + nome, square: SquareC })}
                </div>
    
                <div class="expanded-body">
                    <p class="nome-expanded"> ${nome}</p>
                    <div class="infos-expanded">
                        <p class="cargo-expanded"> ${cargo}</p>
                        <p class="tecnologia">Publica sobre #${tec}, #${tec} e #${tec}</p>
                    </div>
                </div>
    
            </div>
            </div>
        `;
    }
    else {
        return `
      <div class="card">
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