class MyElement extends HTMLElement {
  constructor() { // Вызывается при создании пользовательского элемена
    super();
    console.log('custom element created')
    const shadow = this.attachShadow({ // Получение доступа к shadowRoot, и объявление shadowDom
      // mode: 'open' // open можем получить доступ к shadow из elem.shadowRoot
      mode: "closed" // elem.shadowRoot всегда будет возвращать null
    })
    const style = document.createElement('style');
    // Внешние стили не будут применены к shadowDOM, независимо от типа (open/closed)
    style.innerHTML = `
    .custom-element-div {
      color: red;
    }`
    this.div = document.createElement('div')
    this.div.className = 'custom-element-div'
    this.div.style.border = '1px solid black'
    shadow.append(style);
    shadow.append(this.div) // Добавление элемента в shadow
  }

  connectedCallback() { // Выполняетя пот добавлении элемента в DOM
    console.log('custom element connected')
    this.div.textContent = `Hello, ${this.getAttribute('name')}`
  }

  static get observedAttributes() {
    return ['name'] // Возвращается массив аттрибутов, изменение которых необходимо отслеживать
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log(`Аттрибут ${attrName} поменял своё значение с ${oldValue} на ${newValue}`)
    this.div.textContent = `Hello, ${newValue}`
  }

  disconnectedCallback() { // Выполняется при удалении элемента из DOM

  }

}

customElements.whenDefined('my-element')
  .then(() => console.log('my-element defined'))

customElements.define('my-element', MyElement) // Объявление кастомного элемента (имя обязательно должно содержать "-")
console.log(customElements.get('my-element')) // Возвращает класс пользовательского элемента
document.getElementById('custom').setAttribute("name", "Oleg")

