import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter'
import { $ } from './select';
import { counter } from './components/counter';
import { logo } from './components/logo';

const app = $('#app');

app.innerHTML = `
  <div>
    
    ${logo("https://vitejs.dev",viteLogo,"Vite logo")}
    ${logo("https://www.typescriptlang.org/",typescriptLogo,"TypeScript logo")}


    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    ${counter()}
    ${counter()}

    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    </div>
`
const button = $('#counter')
setupCounter(button);
function counter() {
  return `
  <div class="card">
  <button id="counter" type="button"></button>
  </div>
`;
}

/**
 * @param {string} link
 * @param {string} imagem
 * @param {string} comentario
 */
function logo(link, imagem, comentario) {
  return `
  <a href="${link}">
  <img src="${imagem}" class="logo" alt= "${comentario}" />
  </a>
  `
}

