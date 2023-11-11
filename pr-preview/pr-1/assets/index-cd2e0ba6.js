(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const u="/face2face/pr-preview/pr-1/assets/typescript-f6ead1af.svg",p="/face2face/pr-preview/pr-1/vite.svg",a="/face2face/pr-preview/pr-1/storybook.svg";function d(r){let t=0;const c=s=>{t=s,r.innerHTML=`count is ${t}`};r.addEventListener("click",()=>c(t+1)),c(0)}const l=r=>{const t=document.querySelector(r);if(t===null)throw new Error(`Selector: ${r} doesn't exist in document`);return t};function f(){return`
    <div class="card">
      <button id="counter" type="button">
        count is 0
      </button>
    </div>
  `}function i({link:r,imgSrc:t,descricao:c}){return`
    <a class="logo" href="${r}" target="_blank">
      <img src="${t}" class="logo" alt="${c}" />
    </a>
  `}const g=l("#app");g.innerHTML=`
  <div>
    ${i({link:"https://vitejs.dev",imgSrc:p,descricao:"Vite logo"})}
    ${i({link:"https://www.typescriptlang.org/",imgSrc:u,descricao:"TypeScript logo"})}
    ${i({link:"https://storybookjs.org/",imgSrc:a,descricao:"Storybook logo"})}

    <h1>Vite + TypeScript + Storybook</h1>
    
    ${f()}
    
    <p class="read-the-docs">
      Click on the Vite, TypeScript and Storybook logos to learn more
    </p>
    <p>
      <a href="./sb">
        Click here to see our Storybook live! 
      </a>
    </p>
  </div>
`;d(l("#counter"));
