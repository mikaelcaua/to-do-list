export function mudaParaLightMode() {
    const root = document.querySelector('html');
    if (root) {
        root.classList.remove('darkMode');
    }
}
export function mudaParaDarkMode() {
    const root = document.querySelector('html');
    if (root) {
        root.classList.add('darkMode');
    }
}
