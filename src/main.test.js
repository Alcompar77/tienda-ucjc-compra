import { beforeEach, describe, expect, it, vi } from 'vitest';
import mod from './main.js';

describe('ucjc-compra', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('exporta metadatos de carga', () => {
    expect(mod).toEqual({ nombre: 'compra', version: '0.2.0' });
  });

  it('registra el custom element', () => {
    expect(customElements.get('ucjc-compra')).toBeTruthy();
  });

  it('confirma pedido con sesión y líneas (evento canónico)', async () => {
    const el = document.createElement('ucjc-compra');
    document.body.appendChild(el);
    const spy = vi.fn();
    window.addEventListener('ucjc:compra:pedido-confirmado@1', spy);

    window.dispatchEvent(
      new CustomEvent('ucjc:identidad:sesion-cambiada@1', {
        detail: {
          autenticado: true,
          usuario: { id: 'u-1', email: 'a@ucjc.edu', nombre: 'Ana' },
        },
      })
    );
    window.dispatchEvent(
      new CustomEvent('ucjc:descubrimiento:anadir-al-carrito@1', {
        detail: { productoId: 'p1', nombre: 'Camiseta', precio: 10, cantidad: 2 },
      })
    );
    await Promise.resolve();
    el.shadowRoot.querySelector('[data-a="ok"]').click();

    expect(spy).toHaveBeenCalledTimes(1);
    const detail = spy.mock.calls[0][0].detail;
    expect(detail.usuarioId).toBe('u-1');
    expect(detail.total).toBe(20);
    expect(detail.lineas).toHaveLength(1);
    expect(detail.pedidoId).toMatch(/^PED-/);
  });
});
