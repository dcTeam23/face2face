import './logo.css'
import React from 'react'

/**
 * @typedef {Object} LogoProps
 * @property {string} LogoProps.link - some description here
 * @property {string} LogoProps.imgSrc - some description here
 * @property {string} LogoProps.descricao - some description here
 * 
 * @param {LogoProps} param0 
 * @returns 
 */

export function Logo({link, imgSrc, descricao}) {
  return (
    <a className="logo" href={link} target="_blank">
      <img src={imgSrc} className="logo" alt={descricao} />
    </a>
  
  )
  }


