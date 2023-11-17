import './avatar.css'


/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.imgSrc - some description here
 * @property {string} AvatarProps.descricao - some description here
 * 
 * @param {AvatarProps} props
 */
export function avatar({imgSrc, descricao}) {
  return `
      <img class="avatar" src="${imgSrc}" alt="${descricao}" />
  `
}
