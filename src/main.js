import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import storybookLogo from '/storybook.svg'
import { setupCounter } from './counter'
import { $ } from './select';
import { counter } from './components/counter';
import { logo } from './components/logo';

const app = $('#app');

app.innerHTML = `
  <div>
    ${logo({link: "https://vitejs.dev", imgSrc: viteLogo, descricao: "Vite logo"})}
    ${logo({link: "https://www.typescriptlang.org/", imgSrc: typescriptLogo, descricao: "TypeScript logo"})}
    ${logo({link: "https://storybookjs.org/", imgSrc: storybookLogo, descricao: "Storybook logo"})}

    <h1>Vite + TypeScript + Storybook</h1>
    
    ${counter()}
    
    <p class="read-the-docs">
      Click on the Vite, TypeScript and Storybook logos to learn more
    </p>
    <p>
      <a href="./sb">
        Click here to see our Storybook live! 
      </a>
    </p>
  </div>
`

setupCounter($('#counter'));

