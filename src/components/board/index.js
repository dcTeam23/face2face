import {card} from '../cards'
import './index.css';

/**
 * @typedef { Object } BoardProps
 * @property { import('../cards').CardProps } CardProps.perfil
 * @property { Array<import('../cards').CardProps> } CardProps.list
 */

/**
 * 
 * @param {BoardProps} props 
 */
export const board = ({perfil, list}) => {
 
  return `
    <div class="board">
        ${card({img: perfil.img, nome: perfil.nome, cargo: 'dev'})}
        
        <div class="grid">
          ${list.map((item) => 
            
            `
            <div class="grid-item">
              ${card({img: item.img, nome: item.nome, cargo: 'dev'})}
            </div>
            `
          )}
        </div>
    </div>
  `  
}