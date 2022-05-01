class CardTest extends HTMLElement {
  constructor() {
    super();
    let num = 0;
    let container = document.createElement("div");
    container.classList.add("box");
    let button = document.createElement("button");
    button.classList.add("button1");
    button.innerText = "add";
    let span1 = document.createElement("span");
    span1.classList.add("span1");
    span1.innerText = num;
    let span2 = document.createElement("span");
    span2.classList.add("span2");
    span2.innerText = "简单demo:";
    container.append(span2, span1, button);
    this.appendChild(container);
    button.onclick = function () {
      num++;
      span1.innerText = num;
    };
  }
  connectedCallback() {
    console.log("当 custom element首次被插入文档DOM时，被调用");
  }
  disconnectedCallback() {
    console.log("当 custom element从文档DOM中删除时，被调用");
  }
  adoptedCallback() {
    console.log("当 custom element被移动到新的文档时，被调用");
  }
  attributeChangedCallback() {
    console.log("当 custom element增加、删除、修改自身属性时，被调用。");
  }
}

window.customElements.define("card-test", CardTest);
