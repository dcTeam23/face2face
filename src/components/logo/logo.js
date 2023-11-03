import '../../style.css'

/**
 * @param {string} link
 * @param {string} img
 * @param {string} descricao
 */
export function logo(link, img, descricao) {
  return `<a href=${link} target="_blank">
  <img src="${img}" class="logo" alt="${descricao}" />
</a>`;
}
