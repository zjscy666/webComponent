class MoreCard extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: "open" });
    let el = document.querySelector("#moreCard").content.cloneNode(true);
    shadowRoot.appendChild(el);

    this.$num = shadowRoot.querySelector("#num");
    this.$button1 = shadowRoot.querySelector("#button1");
    this.$button2 = shadowRoot.querySelector("#button2");
    this.$button1.addEventListener("click", () => {
      this.num++;
    });
    this.$button2.addEventListener("click", () => {
      this.num--;
    });
  }
  get label1() {
    return this.getAttribute("label1");
  }
  set label1(value) {
    this.setAttribute("label1", value);
  }
  get label2() {
    return this.getAttribute("label2");
  }
  set label2(value) {
    this.setAttribute("label2", value);
  }

  get num() {
    return this.getAttribute("num");
  }
  set num(value) {
    this.setAttribute("num", value);
  }

  static get observedAttributes() {
    return ["label1", "label2", "num"];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    console.log("当 custom element增加、删除、修改自身属性时，被调用。");
    this.render();
  }

  render() {
    this.$button1.innerHTML = this.label1;
    this.$button2.innerHTML = this.label2;
    this.$num.innerHTML = `It is ${this.num}`;
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
}
customElements.define("more-card", MoreCard);
