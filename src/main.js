class UcjcCompra extends HTMLElement {
  connectedCallback() {
    this.textContent = 'Soy Compra';
  }
}

customElements.define('ucjc-compra', UcjcCompra);