import './avatar.css'


/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.imgSrc 
 * @property {string} AvatarProps.descricao 
 * 
 * @param {AvatarProps} props
 */
export function avatar({imgSrc, descricao}) {
  return `
      <img src="${imgSrc}" class="logo" alt="${descricao}" />
  `
}
