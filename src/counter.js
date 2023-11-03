/**
 * Configura o evento de click, adicionando um texto com contador a cada click
 * @param {HTMLElement} element
 */
export function setupCounter(element) {
  let counter = 0;
  /**
   *
   * @param {number} count
   */
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
