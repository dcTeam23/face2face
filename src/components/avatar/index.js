import "./avatar.css";

/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.imgSrc - some description here
 * @property {string} AvatarProps.descricao - some description here
 * @property {boolean} AvatarProps.square
 * @param {AvatarProps} props
 */
export function avatar({ imgSrc, descricao, square }) {
  if (square == true) {
    return `
  <div class="container">
      <img src="${imgSrc}" class="avatar-square" alt="${descricao}" />
      </div>
  `;
  }
  else {
    return `
  <div class="container">
      <img src="${imgSrc}" class="avatar" alt="${descricao}" />
      </div>
  `;
  }
}
