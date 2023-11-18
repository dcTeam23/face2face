import "./avatar.css";

/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.imgSrc - some description here
 * @property {string} AvatarProps.descricao - some description here
 * @param {AvatarProps} props
 */
export function avatar({ imgSrc, descricao }) {
  return `
  <div>
      <img id="image-avatar" src="${imgSrc}" class="avatar" alt="${descricao}" />
  </div>
  `;
}
