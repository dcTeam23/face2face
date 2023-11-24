import "./avatar.css";

/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.imgSrc - some description here
 * @property {string} AvatarProps.descricao - some description here
 * @property { 'square' | 'circle' } AvatarProps.format - Formato do Avatar (Circular ou Quadrado)
 * @param {AvatarProps} props
 */
export function avatar({ imgSrc, descricao, format }) {
  if (format == "square") {
    return `
    <div class="container">
      <img src="${imgSrc}" class="avatar square" alt="${descricao}" />
    </div>
    `;
  } else {
    return `
    <div class="container">
      <img src="${imgSrc}" class="avatar circle" alt="${descricao}" />
    </div>
    `;
  }
}
