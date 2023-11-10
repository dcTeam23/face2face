function c({link:a,imgSrc:e,descricao:i}){return`
    <a class="logo" href="${a}" target="_blank">
      <img src="${e}" class="logo" alt="${i}" />
    </a>
  `}const n={title:"App/Logo",tags:["autodocs"],render:a=>c(a),argTypes:{link:{description:"endereço para o link do logo"},imgSrc:{description:"endereço para a imgaem do logo"},descricao:{description:"descrição da imagem do logo"}}},o={args:{link:"github.com",imgSrc:"https://github.githubassets.com/assets/mona-loading-dark-7701a7b97370.gif",descricao:"Octocat from Github "}};var r,s,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    link: 'github.com',
    imgSrc: 'https://github.githubassets.com/assets/mona-loading-dark-7701a7b97370.gif',
    descricao: 'Octocat from Github '
  }
}`,...(t=(s=o.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const g=["Primary"];export{o as Primary,g as __namedExportsOrder,n as default};
//# sourceMappingURL=logo.stories-27f19241.js.map
