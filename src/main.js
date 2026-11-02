class UcjcCompra extends HTMLElement {
  connectedCallback() {
    this.textContent = 'Soy Compra';
  }
}

customElements.define('ucjc-compra', UcjcCompra);
export default { nombre: 'compra', version: '0.2.0' };
