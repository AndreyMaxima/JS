class ExtendsButton extends HTMLButtonElement { // Класс, наследующий класс кнопки
  constructor() {
    super();
    this.addEventListener('click', () => alert('Click!'))
  }
  connectedCallback() {
    console.log('Custom button connected')
  }
}

customElements.define('extends-button', ExtendsButton, { extends: 'button' }) // Объявление кастоиного элемента, расширющего функционал существующего
