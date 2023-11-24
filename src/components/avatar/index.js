import './avatar.css'

/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.imgSrc - some description here
 * @property {string} AvatarProps.descricao - some description here
 * @property {string} AvatarProps.formato - some description here
 * 
 * 
 * @param {AvatarProps} props
 */
export function avatar({imgSrc, descricao, formato}) {
  return `
      <img class="${formato}" src="${imgSrc}" alt="${descricao}" />
  `
}