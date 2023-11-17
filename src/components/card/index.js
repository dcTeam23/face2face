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

  if(expanded){
    return `
    <div class="card-expanded">
          <div class="container-expanded">
              <div>
                  ${avatar({ imgSrc: img, descricao: "", square: true })}
              </div>
  
              <div class="body-expanded">
                  <p class="nome"> ${nome}</p>
                  <p class="cargo"> ${cargo}</p>
              </div>
          </div>
    </div>
      `;
  }else{
    return `
    <div class="card">
          <div class="container">
              <div>
                  ${avatar({ imgSrc: img, descricao: "",square: false  })}
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