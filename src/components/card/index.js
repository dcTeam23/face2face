import './card.css'
import '../avatar'
import { avatar } from '../avatar';

/**
 * @typedef {Object} CardProps
 * @property {string} CardProps.nome - some description here
 * @property {string} CardProps.cargo - some description here
 * @property {string} CardProps.img - some description here
 * @property {string} CardProps.topcard - some description here
 * @property {string} CardProps.expanded - some description here
 * @property {string} CardProps.formato - some description here


 * 
 * @param {CardProps} props
 */
export function card(props) {
  const {nome, cargo, img, topcard, expanded, formato} = props;

  return `
<div class="container ${expanded}">
    <div class="card">
      <img src="${topcard}" alt="">
      <div class="infos">${avatar({
        imgSrc: img,
        descricao: 'profile picture from ' + nome,
        formato: 'redondo',

      })}
      </div>
        <div class="nome"><h2>${nome}</h2></div>
        <div class="cargo"><p>${cargo}</p></div>
        <div class="footercard">
        </div>
      </div>
    </div>
  </div>
  `
}

