import './avatar.css'


/**
 * @typedef {Object} avatarProps
 * @property {string} avatarProps.link - some description here
 * @property {string} avatarProps.imgSrc - some description here
 * @property {string} avatarProps.descricao - some description here
 * 
 * @param {avatarProps} props
 */
export function avatar({link, imgSrc, descricao}) {
  return `
    <a class="avatar-container" href="${link}" target="_blank">
      <img src="${imgSrc}" class="avatar" alt="${descricao}" />
    </a>
  `
}
