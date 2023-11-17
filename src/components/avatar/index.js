import "./avatar.css";

/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.imgSrc - some description here
 * @property {string} AvatarProps.descricao
 * @property {boolean} AvatarProps.square - some description here
 * @param {AvatarProps} props
 */
export function avatar({ imgSrc, descricao, square }) {
  if (square) {
    return `
      <img src="${imgSrc}" class="avatar" alt="${descricao}" />
    `;
  } else {
    return `
      <img src="${imgSrc}" class="avatar" alt="${descricao}" />
    `;
  }
}
