/**
 * Фунция - обертка для вызова callback после завершения transition на переданном элементе
 */
export function waitForTransitionEnd(element: HTMLElement, callback: () => void) {
  const onTransitionEnd = () => {
    element.removeEventListener('transitionend', onTransitionEnd);
    callback();
  };

  element.addEventListener('transitionend', onTransitionEnd);
}
