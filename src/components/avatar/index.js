import './avatar.css'

/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.imgSrc - some description here
 * @property {string} AvatarProps.descricao - some description here
 * @property {string} avatarProps.link - some description here
 *
 * @param {AvatarProps} props
 */
export function avatar({imgSrc, descricao, link}) {
  return `
    <a class="avatar-container" href="${link}" target="_blank">
      <img src="${imgSrc}" class="avatar" alt="${descricao}" />
    </a>
  `
}
