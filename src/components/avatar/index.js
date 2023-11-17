import "./avatar.css";

/**
 * @typedef {Object} AvatarProps
 * @property {string} AvatarProps.imgSrc
 * @property {string} AvatarProps.descricao 
 * @property {boolean} AvatarProps.square
 * @param {AvatarProps} props
 */
export function avatar({ imgSrc, descricao, square }) {

  if (square) {
    return `
    <img src="${imgSrc}" class="square" alt="${descricao}" />
`;
  } else {
    return `
    <img src="${imgSrc}" alt="${descricao}" />
`;
  }

}
