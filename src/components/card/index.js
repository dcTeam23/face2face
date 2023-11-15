import { avatar } from '../avatar'
import './card.css'

/**
 * @typedef {Object} CardProps
 * @property {string} CardProps.nome
 * @property {string} CardProps.cargo 
 * @property {string} CardProps.img 
 * 
 * @param {CardProps} props
 */

export function card(props) {

  const { nome, cargo, img } = props;
  return `
  <div class="card-container">
  <div class="image">
      ${avatar({ imgSrc: img, descricao: `profile picture from ${nome}` })}
    </div>
  <h3>Osvaldo Holanda</h3>
  <p>Web Fullsatck Developer</p>
  <div class="skills">
      <h6>Skills</h6>
      <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>HTML</li>
          <li>JavaScript</li> <br>
          <li>CSS</li>
          <li>ReactJS</li>
          <li>Node</li>
          <li>Java</li>
      </ul>
  </div>
</div>

  `
}