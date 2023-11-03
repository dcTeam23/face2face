/**
 * Alias para `document.querySelector`
 * 
 * note: se o seletor não existir na pagina essa função irá disparar um erro 
 * 
 * @param {string} selector
 */
export const $ = (selector) => {
  /** @type {HTMLElement | null} */
  const el = document.querySelector(selector);

  if (el === null) {
    throw new Error(`Selector: ${selector} doesn't exist in document`);
  }

  return el;
} 