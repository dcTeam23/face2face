<<<<<<< HEAD
import './logo.css'


/**
 * @typedef {Object} LogoProps
 * @property {string} LogoProps.link - some description here
 * @property {string} LogoProps.imgSrc - some description here
 * @property {string} LogoProps.descricao - some description here
 * 
 * @param {LogoProps} props
 */
export function logo({link, imgSrc, descricao}) {
  return `
    <a class="logo" href="${link}" target="_blank">
      <img src="${imgSrc}" class="logo" alt="${descricao}" />
    </a>
  `
}
=======
export function logo(link, img, descricao) {
    return `
    <a href=${link} target="_blank">
    <img src="${img}" class="logo" alt="${descricao}"/>
   </a>
    `
   }
>>>>>>> a1169f6 (botão feito)
