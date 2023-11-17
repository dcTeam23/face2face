import { avatar } from "../avatar";
import "./card.css"
/**
 * @typedef { Object } CardProps
 * @property { string } CardProps.nome
 * @property { string } CardProps.cargo
 * @property { string } CardProps.img
 * @property { boolean } CardProps.expanded 
 * @param { CardProps } props
 */

export function card({ nome, cargo, img, expanded }) {
    if(expanded) {
        return `
      <div class="expanded">
            <div class="container-expanded">
                <div class="header-expanded">
                    ${avatar({ imgSrc: img, descricao: "", square: true})}
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
      <div class="card">
            <div class="container">
                <div class="header">
                    ${avatar({ imgSrc: img, descricao: "", square: false })}
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