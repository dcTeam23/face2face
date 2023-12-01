import React from 'react';
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
/**
* 
* @param {LogoProps} props
* @returns
*/

export function Logo({link, imgSrc, descricao}) {
  return (
    <a className="logo" href={link} target="_blank">
      <img src={imgSrc} className="logo" alt={descricao} />
    </a>
  )
}