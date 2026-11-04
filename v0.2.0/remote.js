// src/main.js
var e = "ucjc:descubrimiento:anadir-al-carrito@1", t = "ucjc:identidad:sesion-cambiada@1", n = class extends HTMLElement {
	#e = [];
	#t = null;
	#n = "";
	#r = (e) => {
		let t = e.detail || {};
		this.#e.push({
			productoId: String(t.productoId ?? ""),
			nombre: String(t.nombre ?? "Producto"),
			precio: Number(t.precio) || 0,
			cantidad: Math.max(1, Number(t.cantidad) || 1)
		}), this.#n = `Añadido: ${t.nombre || t.productoId}`, this.#s();
	};
	#i = (e) => {
		let t = e.detail || {};
		this.#t = t.autenticado ? t.usuario?.id ?? null : null, this.#s();
	};
	connectedCallback() {
		this.attachShadow({ mode: "open" }), window.addEventListener(e, this.#r), window.addEventListener(t, this.#i), this.#s();
	}
	disconnectedCallback() {
		window.removeEventListener(e, this.#r), window.removeEventListener(t, this.#i);
	}
	#a() {
		return this.#e.reduce((e, t) => e + t.precio * t.cantidad, 0);
	}
	#o() {
		if (!this.#t || !this.#e.length) return;
		let e = `PED-${Date.now()}`, t = this.#e.map((e) => ({ ...e })), n = {
			pedidoId: e,
			usuarioId: this.#t,
			creadoEn: (/* @__PURE__ */ new Date()).toISOString(),
			total: Number(this.#a().toFixed(2)),
			lineas: t
		};
		window.dispatchEvent(new CustomEvent("ucjc:compra:pedido-confirmado@1", { detail: n })), this.#e = [], this.#n = `Pedido ${e} confirmado (${n.total.toFixed(2)} €)`, this.#s();
	}
	#s() {
		let e = this.#t ? `Sesión: <b>${this.#t}</b>` : "Sin sesión — inicia sesión en Identidad para confirmar", t = this.#e.length ? this.#e.map((e) => `<li>${e.nombre} × ${e.cantidad} · ${(e.precio * e.cantidad).toFixed(2)} €</li>`).join("") : "<li><i>Carrito vacío — espera un «añadir» de Descubrimiento o usa el botón demo</i></li>";
		this.shadowRoot.innerHTML = `
      <style>
  :host { display:block; font:15px/1.45 system-ui,sans-serif; color:#152033; }
  .box { background:#f7f9fc; border:1px solid #d7dee8; border-radius:12px; padding:1rem 1.1rem; }
  h2 { margin:0 0 .35rem; font-size:1.1rem; }
  .meta { color:#5b677a; font-size:.85rem; margin-bottom:.75rem; }
  ul { margin:.4rem 0 .8rem; padding-left:1.1rem; }
  li { margin:.2rem 0; }
  .row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
  button { font:inherit; border:0; border-radius:8px; padding:.45rem .85rem; cursor:pointer; background:#0f3d7a; color:#fff; }
  button.sec { background:#e7ecf3; color:#152033; }
  button:disabled { opacity:.45; cursor:not-allowed; }
  .ok { color:#0b6b3a; font-size:.85rem; min-height:1.2em; }
</style>
      <div class="box">
        <h2>Compra</h2>
        <p class="meta">${e}</p>
        <ul>${t}</ul>
        <p><b>Total: ${this.#a().toFixed(2)} €</b></p>
        <div class="row">
          <button type="button" data-a="demo" class="sec">+ producto demo</button>
          <button type="button" data-a="ok" ${this.#t && this.#e.length ? "" : "disabled"}>
            Confirmar pedido
          </button>
          <button type="button" data-a="vaciar" class="sec" ${this.#e.length ? "" : "disabled"}>Vaciar</button>
        </div>
        <p class="ok">${this.#n}</p>
      </div>`, this.shadowRoot.querySelector("[data-a=\"demo\"]").onclick = () => {
			this.#r({ detail: {
				productoId: "prod-demo",
				nombre: "Camiseta UCJC (demo)",
				precio: 19.99,
				cantidad: 1
			} });
		}, this.shadowRoot.querySelector("[data-a=\"ok\"]").onclick = () => this.#o(), this.shadowRoot.querySelector("[data-a=\"vaciar\"]").onclick = () => {
			this.#e = [], this.#n = "Carrito vacío", this.#s();
		};
	}
};
customElements.define("ucjc-compra", n);
var r = {
	nombre: "compra",
	version: "0.2.0"
};
export { r as default };
