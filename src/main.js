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
    ${logo({link: "https://vitejs.dev", imgSrc: viteLogo, descricao: "Vite logo"})}
    ${logo({link: "https://www.typescriptlang.org/", imgSrc: typescriptLogo, descricao: "TypeScript logo"})}

    <h1>Vite + TypeScript</h1>
    
    ${counter()}
    ${counter()}
    
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter($('#counter'));

